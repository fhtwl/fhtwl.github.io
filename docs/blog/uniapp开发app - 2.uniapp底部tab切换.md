--- 
title: uniapp开发app - 2.uniapp底部tab切换
date: 2020-03-27
categories: 
 - 前端
tags: 
 - uniapp
 - vue.js
 - js
---

## uniapp开发app（2）：uniapp底部tab切换
<img src="/images/20190628/audio.png" /><br />
<!-- ![alt text](/images/20190628/audio.png " ")   -->
#### uniapp底部tab切换的主要实现方式
* 原生
    原生tabbar性能好，切换非常流程，但是有个性化设置不足的问题，比如上图的这个效果，原生tabbar就无法实现。原生的只能实现tabbar的item都是一样的设计，像这种中间有一个凸起的，就无法实现了
* 模拟
    使用div也就是view去模拟tabbar，能够根据各种各样的设计，完成炫酷的、个性化的效果，但同样的，它也有缺点，就是性能相比原生较差。经过探索，找到了一个比较好的实现方式，就是使用单页面，tabbar切换的多个页面，都放在一个页面上，在点击tabbar时显示隐藏。tabbar则放在父页面里。这样可以解决tabbar放在单页面里，单页面切换时闪烁的问题。具体代码如下

```html
<template>
	<view class="co-tabbar">
		<view class="co-tabbar-content">
			<view
			open-type="switchTab" 
			hover-class="other-navigator-hover" 
			class="co-tabbar-item" 
			@tap="getPage(item)" 
			v-for="(item,index) in tabbarList" 
			:key="index">
				<view class="img">
					<image :src="'/'+item.iconPath" mode="" v-show="!(item.name == marketPageName)"></image>
					<image :src="'/'+item.selectedIconPath" v-show="!!(item.name == marketPageName)" mode=""></image>
				</view>
				<view :class="{name:true,active:item.name == marketPageName}">{{item.text}}</view>
			</view>
		</view>
		<!-- 预加载所有tabbar 图标，以防点击的时候 闪一下 此处隐藏显示 -->
		<view>
			
			<view v-for="(item,index) in tabbarList" :key="index" style="display: none;">
				<image :src="item.iconPath" mode=""></image>
				<image :src="item.selectedIconPath" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['marketPageName']),
		data() {
			return {
				tabbarList:[
					{
						"pagePath": "pages/market/main/main",
						"text": "首页",
						"iconPath": "static/market/images/wxsy-icon@3x.png",
						"selectedIconPath": "static/market/images/xzsy-icon@3x.png",
						"name": "main"
					},
					{
						"pagePath": "pages/market/cloudMall/cloudMall",
						"text": "云市场",
						"iconPath": "static/market/images/wxyunshichang-icon@3x.png",
						"selectedIconPath": "static/market/images/xz@3x.png",
						"name": "cloudMall"
					},
					{
						"pagePath": "pages/market/user/user",
						"text": "我的",
						"iconPath": "static/market/images/wxwode-icon@3x.png",
						"selectedIconPath": "static/market/images/xzwode-icon@3x.png",
						"name": "user"
					}
				]
			}
		},
		props:['pageName'],
		methods:{
			getPage(obj) {
				this.$emit('sendiptVal',obj.name)
				this.$store.state.marketPageName = obj.name
			}
		}
	}
</script>

<style lang="scss" scoped>
	.co-tabbar {
		width:100%;
		position: fixed;
		bottom:0;
		left:0;
		right:0;
		height:50px;
		background:#fff;
		z-index: 200;
		box-sizing: border-box;
		border-top:1px solid #eee;
	}
	.co-tabbar-content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height:100%;
		.co-tabbar-item {
			flex:1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height:100%;
			.img {
				position: relative;
				display: inline-block;
				margin-top: 5px;
				image {
					width:48upx;
					height:48upx;
				}
				font-size: 0;
			}
			.name {
				font-size: 20upx;
				line-height: 1.8;
				color:#ccc;
			}
			.name.active {
				color:#f9a035;
			}
		}
		.co-tabbar-item:nth-child(2) {
			position: relative;
			.img {
				border-top:1px solid #eee;
				border-radius: 50%;
				background: #fff;
				width:80rpx;
				height:80rpx;
				margin-top:-20rpx;
				image {
					width:100%;
					height:100%;
					position: relative;
					top:0rpx;
				}
				
			}
			.name {
				font-size: 20upx;
				position: relative;
				z-index: 2;
			}
		}
	}
</style>
```
