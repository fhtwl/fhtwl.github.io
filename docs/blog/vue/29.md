--- 
title: vue更改了数据，但是视图却没有更新的问题
date: 2019-08-02
categories: 
 - 前端
tags: 
 - array
 - vue.js
 - js
---

## vue更改了数据，但是视图却没有更新的问题

在一个使用v-for组件里，我需要一个效果，就是每个item子项里的video如果加载异常，就让这个item隐藏。于是我给item添加了一个动态的class，data里定义了一个空的数组:is_load，并给item里的video绑定error事件.
```html
<div v-for='(value,index) in arr' :key="value.sid" :class="{aa:is_load[index]}">
    <video controls :src="value.videouri" @error="setLoad(index)"></video>
</div>
```
，当error事件触发时，video加载失败，变执行一个方法，使数组is_load的对应值为true，给item添加类aa，aa绑定了隐藏的样式
```javascript
methods: {
    setLoad(index) {
       this.is_load[index] = true
    }
}
```
可是结果是，没有效果，aa没有绑定上去    
最红终于发现，是因为JavaScript 的限制，Vue 不能检测一些特殊变动的数组，也不能检测对象属性的添加或者删除，比如：
* 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
* 当你修改数组的长度时，例如：vm.items.length = newLength    
因此需要一些特殊的方法去修改并更新数组：
```javascript
methods: {
    setLoad(index) {
        Vue.set(this.is_load,index,true)
    }
}
```