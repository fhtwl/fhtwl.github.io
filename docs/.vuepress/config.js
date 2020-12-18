module.exports = {
	title: '云游',
	base: '/',
	description: '仰天大笑出门去',
	head: [
		['link', { rel: 'icon', href: 'favicon.ico' }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
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
			{ text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
			{ text: 'GitHub', link: 'https://github.com/fhtwl/fhtwl.github.io', icon: 'reco-github' },
		],
		sidebar: [
			{
				title: '起步',
				collapsable: false,
				children: ['/blog/']
			},
			{
				title: '技术日志',
				children: [
					'/blog/20190617_1',
					'/blog/20190617_2',
					'/blog/20190619_1',
					'/blog/20190619_2',
					'/blog/20190620_1',
					'/blog/20190620_2',
					'/blog/20190620_3',
					'/blog/20190627_1',
					'/blog/20190627_2',
					'/blog/20190628_1',
					'/blog/20200327_1',
					'/blog/20200327_2',
					'/blog/20200406_1',
					'/blog/20200505_1',
					'/blog/20200506_1',
					'/blog/20200507_1',
					'/blog/20200530_1',
					'/blog/20200610_1',
					'/blog/20200622_1',
					'/blog/20201218_1',
					'/blog/20201218_2',
					'/blog/20201218_3'
				]
			},
			{
				title: '关于',
				children: [
					'/blog/about',
				]
			},
		],
		blogConfig: {
			category: {
			  location: 2,     // 在导航栏菜单中所占的位置，默认2
			  text: 'Category' // 默认文案 “分类”
			},
			tag: {
			  location: 3,     // 在导航栏菜单中所占的位置，默认3
			  text: 'Tag'      // 默认文案 “标签”
			}
		},
		// valine
		valineConfig: {
			appId: 'qUQMGTPIMzqba3Lk57jU25RK-gzGzoHsz',// your appId
			appKey: 'fMavvPU8S5WJk1rKvsdDdqgx', // your appKey
			verify: 'true'
		}
	}
	
}