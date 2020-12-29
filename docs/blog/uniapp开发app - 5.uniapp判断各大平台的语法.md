--- 
title: uniapp开发app - 5.uniapp判断各大平台的语法
date: 2020-04-06
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

## uniapp开发app（5）：uniapp判断各大平台的语法

#### 背景
uniapp作为一个强大的前端跨端框架，是拥有一定兼容多平台的能力的。但是由于各平台的差异性和兼容的代价问题，某些功能还是需要自己去兼容的。<br />
这里我整理了一些uniapp主流平台的判断，一是为了记录和方便以后好找，二是分享出来省去其他人查资料的时间

* 判断是在微信开发者工具里运行还是在手机里运行
> uni.getSystemInfoSync().platform 
```javascript
if(uni.getSystemInfoSync().platform === 'devtools'){
    console.log('运行在开发工具上')
}else{　　　　　　　　　　　　　　　　　　　　　　　　　　
    console.log('运行在手机中')　
}　
```

* 判断当前环境是H5 还是App
> process.env.NODE_ENV 
```javascript
if(process.env.NODE_ENV === 'development'){
    console.log('H5')
}else{　　　　　　　　　　　　　　　　　　　　　　　　　　
    console.log('APP')　
}　
```

* 判断是安卓还是ios环境
> uni.getSystemInfoSync().platform  
```javascript
if(uni.getSystemInfoSync().platform === 'android'){
    console.log('android')
}else{　　　　　　　　　　　　　　　　　　　　　　　　　　
    console.log('ios')　
}　
```

