--- 
title: uniapp开发app - 1.uniapp环境配置
date: 2020-03-03
categories: 
 - 前端
tags: 
 - uniapp
 - webapp
 - vue.js
 - npm
 - nodejs
 - js
---

## uniapp开发app（1）：uniapp环境配置

#### uniapp简介
uniapp是基于vue开发所有前端应用的框架，可以将一套代码，编译发布为h5、小程序、Android、iOS等多个平台。基于html5plus的扩展js API，用于访问手机端的原生能力，实现与原生App同样强大的功能和性能，设备能力如摄像头、陀螺仪、文件系统等，业务能力如上传下载、二维码、地图、支付、语音输入、消息推送等。<br />
除了功能外，HTML5+很重要的特点是提供了原生的渲染能力，通过plus.webview、plus.nativeObj、plus.nativeUI，让开发者可以使用js来调用原生渲染能力，实现体验的大幅提升。
原生的api多达40万，HTML5+的封装并非把40万api都封装了一遍，而是分成了2个层面：

* HTML5Plus规范：常用的扩展能力，比如二维码、语音输入，都封装到了规范中，同时实现了Android和iOS的解析引擎，使得开发者的代码编写一次，可跨平台运行。
* Native.js是另一项创新技术。手机OS的原生API有四十多万，大量的API无法被HTML5使用。Native.js把几十万原生API映射成了js对象，通过js可以直接调ios和android的原生API。这部分就不再跨平台，写法分别是plus.ios和plus.android，比如调ios game center，或在android手机桌面创建快捷方式，这些都是平台专有的api。<br />
Native.js的用法示例，
~~~ javascript
var obj= plus.android.import("android.content.Intent")
~~~

将一个原生对象android.content.Intent映射为js对象obj，然后在js里操作obj对象的方法属性就可以了 <br />
具体详情api可访问<a href="http://www.html5plus.org/doc/h5p.html">HTML5Plus官网</a> <br/>


#### uniapp开发规范
为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：
* 页面文件遵循 Vue 单文件组件 (SFC) 规范
* 组件标签靠近小程序规范，详见uni-app 组件规范
* 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范
* 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期
* 为兼容多端运行，建议使用flex布局进行开发

#### uniapp项目构建
官方有两种项目构建方式：
* 使用HBuilderX可视化构建
* 使用vue-cli构建
为了灵活引入组件，这里实用vue-cli的构建方式
* 安装nodejs
> 前往<a href="https://nodejs.org/zh-cn/">nodejs官网</a>下载
* 安装vue-cli
> 全局安装vue-cli
~~~~ sh
    npm install -g @vue/cli
~~~~
* 通过vue-cli构建uniapp项目
> 进入项目目录，命令行输入
~~~~ sh
    npm run serve
~~~~

#### app目录结构
app <br />
├── public    
│  ├── index.html     入口页面   <br >
├── package.json      npm包配置文件，里面定义了项目的npm脚本，依赖包等信息<br >
├── babel.config.js   js编译器配置<br >
├── package-lock.json 安装包版本<br >
├── postcss.config.js postcss配置<br >
├── src               源码目录  <br >
│  ├── main.js             入口js文件<br >
│  ├── app.vue             根组件<br >
│  ├── manifest.json       应用配置文件<br >
│  ├── pages.json          应用全局配置<br >
│  ├── service.js          账号信息<br >
│  ├── README.md           项目介绍   <br >
│  ├── components          公共组件目录<br >
│  │  └── common           根据功能分类存放组件<br >
│  ├── store               应用级数据（state）<br >
│  │  └── index.js<br >
│  └── pages              页面目录<br >
│  │  ├── main<br >
│  │  │  ├── main.vue        首页   <br >
│  │  │  └──a             首页下的a子页面存放目录 <br >
│  │  │  │   └──a.vue      <br >
│  │  ├── user              用户中心 <br >
│  │  │  └── user.vue        <br >
│  ├── static             纯静态资源，不会被wabpack构建。 <br >
│  │  ├── common            公共静态资源（如jq、common.css）<br >
│  │  │  ├── css<br >
│  │  │  │   └── common.css 通用样式文件<br >
│  │  ├── images       图片<br >
└──└──└── js           js包<br >