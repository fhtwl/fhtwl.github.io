--- 
title: uniapp开发app - 6.uniapp在微信中使用swiper组件时无法阻止滑动切换的问题
date: 2020-05-05
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

## uniapp开发app（6）：uniapp在微信中使用swiper组件时无法阻止滑动切换的问题

* uniapp在微信中使用swiper组件时无法阻止滑动切换的问题
```html
<template>
<swiper>
    <swiper-item catchtouchmove="catchTouchMove" @touchstart.stop="catchTouchMove">
        1
    </swiper-item>
     <swiper-item catchtouchmove="catchTouchMove" @touchstart.stop="catchTouchMove">
        2
    </swiper-item>
</swiper>
</template>

<script>
    export default {
        methods:{
            catchTouchMove() {
			    return false
		    }
        }
    }
</script>
```

#### 2020年05月6日更新
上述方法，实际上是阻止了swiper-item的触摸滑动事件，导致整个页面内无法滑动（不仅仅是左右切换滑动，就连上下滚动也无法操作），所以这个方法在某些情况下是有问题的。<br>
因为当前我需要的效果，只是因为swiper的左右滑动切换，与swiper里的echart图滑动选择tooltip有冲突。所以当我把阻止滑动的代码放到echart的父级的父级上，就解决了




