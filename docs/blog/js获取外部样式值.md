--- 
title: js获取外部样式值
date: 2019-07-31
categories: 
 - 前端
tags: 
 - style
 - css
 - js
---

## js获取外部样式值

js获取样式的值，比如获取上边距margin-top,第一时间的做法往往是一下两种
```js
//jq
$('div').css("margin-top")
//js
document.querySelector('div').style.marginTop
```
然后却会发现最终输出是""或者"0px"，而并非正确的值   
在搜索资料后发现，以上两种方法原理都是一样的，都是获取dom对象的style对象，但是问题在于，style对象的样式值，只包含行内的值。   
样式包含三种：
>外部样式，即引入以css为扩展名的文件；
>嵌入式样式，即html内部的style标签所包含的样式
>内联样式，即写在html标签的style属性内的值
而实际上，大多数情况下，我们需要的是外部样式的值。而通过style对象，能获取只有第三种也就是内样样式值。   
因此，我们需要另外的方法。

### getComputedStyle方法
Window.getComputedStyle()方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问   
这是MDN上对getComputedStyle方法的解释。简单来说，就是可以获取最终计算后的样式值    
官方介绍的语法是：
```js
let style = window.getComputedStyle(element, [pseudoElt]);
```
#### element
>用于获取计算样式的Element。
#### pseudoElt 可选
>指定一个要匹配的伪元素的字符串。必须对普通元素省略（或null）。
getComputedStyle方法会返回一个对象，这个对象包含某个节点的所有style的计算值。并且这个对象有个方法--getPropertyValue，会返回某一个css属性的值，具体代码如下：
```js
var box = document.querySelector("#box")
window.getComputedStyle(box).getPropertyValue("margin-top")
//同样支持驼峰式marginTop写法
```
但要注意的是，该方法只能获取，无法设置。在样式改变后，getComputedStyle返回的style对象会实时更新。getPropertyValue里的值，在使用简写如“font”时，可能会辉县兼容性问题