module.exports = {
	title: '云游',
	base: '/',
	description: '仰天大笑出门去',
	head: [
		['link', { rel: 'icon', href: 'favicon.ico' }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
		['script',{ src: '/live2dw/L2Dwidget.min.js' }],
		['script',{ src: '/live2dw/L2Dwidget.0.min.js' }],
		['script',{ src: '/live2dw/initLine2dw.js' }],
		['link', { rel: 'stylesheet', href: '/live2dw/initLine2dw.css' }],
	],
	theme: 'reco',
	themeConfig: {
		author: 'fhtwl', //全局作者
		huawei: false,
		displayAllHeaders: true,
		sidebarDepth: 0,
		type: 'blog',
		nav: [
			{ text: '指南', link: '/', icon: 'reco-home'},
			{ text: '时间线', link: '/timeLine/', icon: 'reco-date' },
			{ text: 'GitHub', link: 'https://github.com/fhtwl/fhtwl.github.io', icon: 'reco-github' },
		],
		// sidebar: [
		// 	{
		// 		title: '起步',
		// 		collapsable: false,
		// 		children: ['/blog/']
		// 	},
		// 	{
		// 		title: '技术日志',
		// 		children: [
		// 			'/blog/20190617_1',
		// 			'/blog/20190617_2',
		// 			'/blog/20190619_1',
		// 			'/blog/20190619_2',
		// 			'/blog/20190620_1',
		// 			'/blog/20190620_2',
		// 			'/blog/20190620_3',
		// 			'/blog/20190627_1',
		// 			'/blog/20190627_2',
		// 			'/blog/20190628_1',
		// 			'/blog/20200327_1',
		// 			'/blog/20200327_2',
		// 			'/blog/20200406_1',
		// 			'/blog/20200505_1',
		// 			'/blog/20200506_1',
		// 			'/blog/20200507_1',
		// 			'/blog/20200530_1',
		// 			'/blog/20200610_1',
		// 			'/blog/20200622_1',
		// 			'/blog/20201218_1',
		// 			'/blog/20201218_2',
		// 			'/blog/20201218_3'
		// 		]
		// 	},
		// 	{
		// 		title: '关于',
		// 		children: [
		// 			'/blog/about',
		// 		]
		// 	},
		// ],
		blogConfig: {
			category: {
			  location: 2,     // 在导航栏菜单中所占的位置，默认2
			  text: '分类' // 默认文案 “分类”
			},
			tag: {
			  location: 3,     // 在导航栏菜单中所占的位置，默认3
			  text: '标签'      // 默认文案 “标签”
			}
		},
		// valine
		valineConfig: {
			appId: 'qUQMGTPIMzqba3Lk57jU25RK-gzGzoHsz',// your appId
			appKey: 'fMavvPU8S5WJk1rKvsdDdqgx', // your appKey
			verify: 'true'
		},
		friendLink: [
			{
				title: '素秋云',
				desc: '一个默默奋进的Java开发者。',
				logo: "https://wang_yongquan.gitee.io/blog/images/logo.jpg",
				link: 'http://wang_yongquan.gitee.io/blog/'
			},
		]
	}
	
}
