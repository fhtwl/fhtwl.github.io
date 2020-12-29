--- 
title: uniapp开发app - 7.uniapp在微信中按需引入echart
date: 2020-05-06
categories: 
 - 前端
tags: 
 - uniapp
 - webapp
 - vue.js
 - npm
 - nodejs
 - js
 - 微信小程序
---

## uniapp开发app（7）：uniapp在微信中按需引入echart

开发小程序时，因为小程序对源码包的体积有限制，所以要控制体积。<br?>
虽然通过分包来消减提交，但是分包主要是对图片过多过大有效果。因为分包也同样要保证分包的最小体积小于2M<br>
在开发过程中，使用了echart，但是echart体积过大，即使是压缩之后，也有700多M
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






