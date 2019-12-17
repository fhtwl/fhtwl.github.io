## 项目总览
项目使用vuepress搭建

#### 需求
记录人生走过的路，遇到的人，拾起的花

#### vuepress优势
* 为技术文档而优化的内置Markdown拓展
* 在Markdown文件中使用Vue组件的能力
* Vue驱动的自定义主题系统
* 自动生成Service Worker(支持PWA)
* Google Analytics集成
* 基于Git的"最后更新时间"
* 多语言支持
* 响应式布局

#### 涉及技术
* npm
* vuepress
* markdown
* git

#### 环境搭建
1.安装vuepress
>需要node.js版本>=8
全局安装vuepress
```
npm install -g vuepress
```
创建项目目录
```
mkdir project
cd project
```
初始化项目
```
npm init -y
```
新建docs文件夹
>docs文件夹作为项目文档根目录，主要放置Markdown类型的文章和.vuepress文件夹。
```
mkdir docs
```
设置package.json
>package.json是包的配置文件，
``` json
// package.json
{
  "name": "fhtwl.github.io",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "vuepress": "^1.0.1"
  },
  "devDependencies": {
    "vuepress-theme-reco": "^1.0.0-alpha.25"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fhtwl/fhtwl.github.io.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/fhtwl/fhtwl.github.io/issues"
  },
  "homepage": "https://github.com/fhtwl/fhtwl.github.io#readme"
}
```
创建.vuepress目录
>在docs目录中，创建.vuepress目录，.vuepress目录主要用于存放VuePress相关的文件。
```
mkdir .vuepress
cd .vuepress
```
在.vuepress创建config.js 
>config.js是VuePress必要的配置文件，它导出y一个javascript对象
``` js
// config.js
module.exports = {
	title: '云游',  //网站标题
	base: '/',
	description: '博客',  //网站描述
	head: [ //head：额外的需要被注入到当前页面的HTML"head"中的标签，其中路径的"/"就是public资源目录。
		['link', { rel: 'icon', href: 'favicon.ico' }]
	],
	themeConfig: {
		nav: [ //导航栏配置
            { text: '指南', link: '/' }, //'/'表示根目录docs下
            { text: '博文',
                items: [
                    { text: 'Android', link: '/android/' },
                    { text: 'ios', link: '/ios/' },
                    { text: 'Web', link: '/web/' }
                ] 
            },
			{ text: 'GitHub', link: 'https://github.com/fhtwl/fhtwl.github.io' },
		],
		sidebar: [ //侧边栏配置，你可以省略.md拓展名，同时以/结尾的路径将会被视为*README.md
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
					'/blog/20190620_2'
				]
			},
			{
				title: '关于',
				children: [
					'/blog/about',
				]
			},
		]
	}
	
}
```
在.vuepress创建public文件夹
>public存放静态资源，如logo图片等
```
mkdir public
```
此时项目结构为
```
project
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json
```
自定义页面
>默认的主题提供了一个首页（Homepage）的布局(用于这个网站的主页)。想要使用它，需要在你的根级 README.md的home: true，然后添加数据。
```
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
此时运行，访问<localhost:8080>即可看到效果
```
npm run docs:dev
```
部署上线
>由于构建的时候生成静态页面，所以将dist文件夹中的内容可以部署在gitHub的pages或者coding的pages都可以。如果使用git上传到github上，操作比较繁琐，这里使用脚本的方式自动部署到github上。
```
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

更多其他配置可前往[官网](https://vuepress.vuejs.org/ "官网")查看api文档

