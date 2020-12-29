--- 
title: uniapp开发app - 8.处理swiper切换页面，ios手机里，页面滑动会卡住的问题
date: 2020-12-18
categories: 
 - 前端
tags: 
 - js
 - uniapp
 - app
 - ios
 - tab
 - swiper
---

## http

#### uniapp开发app - 8.处理swiper切换页面，ios手机里，页面滑动会卡住的问题
ios里页面滑动会卡住的问题，是因为页面中出现两层滚动条。滚动内部滚动条的时候，有时候会触发外部发滚动条，而不是里面的滚动条，这个时候页面就会表现为卡住。<br>

在使用uniapp过程中，经常会遇到tab配合swiper组件实现页面中部分模块的切换。但是uniapp的swiper必须设置高度，且只能是px，如果随便设置一个高度，且swiper部分加上外面的内容大于整个页面的高度，就会出现一层滚动条（即外部滚动条）；如果swiper内部很长，便会出现另一层滚动条（即内部滚动条）。<br>
于是，bug就出现了。<br>
所以，只要控制页面只有一个滚动条就好了<br>
内部滚动条出现无可避免，所以只能在外部滚动条上想办法。<br>
由于swiper的页面，swiper一般都是在页面的最下面，所以只用知道swiper距离顶部的高度，再用屏幕的高度减去swiper距离顶部的高度，就能知道页面留给swiper的距离剩下多少了。

``` js
/*
* 获取留给swiper的高度
* @param { string } select ,swiper选择器，如.list
* @return { string }  返回swiper的高度,单位
*/
const getHeight = async (select)=> {
    let rpx = uni.getSystemInfoSync().screenWidth / 750 //rex与px的不利
    let height = uni.getSystemInfoSync().screenHeight  //屏幕高度
    let _height = await getSwiperTop(select) //swiper距离顶部的距离，即其它部分的高度
    return height - _height - 20*rpx + 'px' //20px,是留给底部的空隙，为了好看，可以不加
}
/*
* 获取其它部分的高度
* @param { string } select ,swiper选择器，如.list
* @return { string }  返回swiper距离顶部的距离
*/
async function getSwiperTop(select) { 
	return new Promise((resolve, reject) => {
		let dom = uni.createSelectorQuery().select(select).boundingClientRect( data=> {
			resolve(data.top)
		}).exec();
	})
}
```



