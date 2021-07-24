--- 
title: uniapp开发app - 4.uniapp里echart的使用
date: 2020-03-27
categories: 
 - 前端
tags: 
 - uniapp
 - vue.js
 - js
 - echart
---

## uniapp开发app（4）：uniapp里echart的使用

这里的图表使用，其目的是兼容app端和h5端，其他端的效果并未经过测试 <br>

h5端，echart的使用方法是和pc端一样的，但是这种使用方法在app端会报错<br>

官方推荐的是，使用renderjs,这是一种运行在视图层的js，vue页面通过renderjs可以操作浏览器对象，进而可以让基于浏览器的库直接在uni-app的App端运行<br>

具体写法如下：
```html
<template>
	<view>
		<view id="canvasLineBar" :prop="optionBarLine" :change:prop="echarts.updateEcharts"></view>
	</view>
</template>
<script>
	export default {
        methods:{
            getData() {
                uni.request({
                    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
                    data: {
                        text: 'uni.request'
                    },
                    header: {
                        'custom-header': 'hello' //自定义请求头信息
                    },
                    success: (res) => {
                        this.optionBarLine.server[0].data = res.data.data1
                        this.optionBarLine.server[1].data = res.data.data2
                    }
                });
            }
        },
		data() {
			return {
				optionBarLine: {
					// color: this.echartColor,
					tooltip: {
						trigger:'axis',
						formatter:'{b0}<br>'+
						'{a0}:{c0}kWh<br>'+
						'{a1}:{c1}元'
					},
					xAxis: {
						data: [],
						splitArea: { // 网格区域
							show: false // 是否显示，默认为false
						},
						splitLine: { // gird 区域中的分割线
							show: false, // 是否显示
						},
						axisTick: {
							show: false
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: 'hsla(0, 0%, 90%, 1)'
							},
						},
						axisLabel: { // 坐标轴的标签
							interval: 2,
							show: true, // 是否显示
							inside: false, // 是否朝内
							rotate: 0, // 旋转角度
							margin: 8, // 刻度标签与轴线之间的距离
							color: '#999', // 默认轴线的颜色
							textStyle: {
								color: '#999'
							},
						},
					},
					legend: {
						show: true,
						data: ['分时电量', '累计电费'],
						icon: 'rect',
						itemWith: 1,
						itemHeight: 5,
					},
					yAxis: [{
							type: 'value',
							name: '电量',
							show: true, // 是否显示
							position: 'left', // y轴位置
							offset: 0, // y轴相对于默认位置的偏移
							type: 'value', // 轴类型，默认为 ‘category’
							name: 'kWh', // 轴名称
							nameLocation: 'end', // 轴名称相对位置value
							nameTextStyle: { // 坐标轴名称样式
								color: '#ccc',
								padding: [0, 20, 0, 0] // 坐标轴名称相对位置
							},
							splitArea: { // 网格区域
								show: false // 是否显示，默认为false
							},
							splitLine: { // gird 区域中的分割线
								show: false, // 是否显示
							},
							axisTick: {
								show: false
							},
							axisLine: {
								show: false,
								lineStyle: {
									color: '#ccc'
								},
							},
							axisLabel: { // 坐标轴的标签
								show: true, // 是否显示
								inside: false, // 是否朝内
								rotate: 0, // 旋转角度
								margin: 8, // 刻度标签与轴线之间的距离
								color: '#999', // 默认轴线的颜色
								textStyle: {
									color: '#999'
								},
							},
						}
					],
					grid: [
						{
							top: 50,
							left: 80,
							right: 80,
							bottom: 30
						}
					],
					series: [
                        {
							name: '分时电量',
							type: 'bar',
							data: [],
							barWidth: 4,
							yAxisIndex: 0,
							smooth: true,
							symbol: 'none',
							color: 'rgba(20,170,255,1)'
						},
						{
							name: '累计电费',
							type: 'line',
							data: [],
							smooth: true,
							symbol: 'none',
							color: 'rgba(248,181,81,1)'
						}
					]
				},
				color: ['#ff4546', '#ff9700', '#57c039', '#32c7ff']

			}
		}

	}
</script>
<script module="echarts" lang="renderjs">
	let myChart, myChart1
	export default {
		mounted() {

			if (typeof window.echarts === 'function') {
				this.initEcharts();
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
				script.src = 'static/js/echart/echarts.js';
				script.onload = this.initEcharts.bind(this);
				document.head.appendChild(script);
			}

		},
		methods: {

			initEcharts: function() {
				// this.chart2 = this.load_echart(this.setChartBar(data2), 'canvasLineBar');
				myChart = echarts.init(document.getElementById('canvasLineBar'));
				// 观测更新的数据在 view 层可以直接访问到
				myChart.setOption(this.optionBarLine);
			},

			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				if(echarts) {
					myChart = echarts.init(document.getElementById('canvasLineBar'));
					myChart.setOption(newValue)
				}

			}
		}

	}
</script>


```
现在发现的唯一的问题，是配置项里的function无法使用,因此，很多自定义功能无法使用
