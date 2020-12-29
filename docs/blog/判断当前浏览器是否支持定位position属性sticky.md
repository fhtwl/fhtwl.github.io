--- 
title: 判断当前浏览器是否支持定位position属性sticky
date: 2019-06-19
categories: 
 - 前端
tags: 
 - 移动端
 - css
 - js
---

## 判断当前浏览器是否支持定位position属性sticky

```javascript
function isSupportSticky() {
    var prefixTestList = ['', '-webkit-'];
    var stickyText = '';
    for (var i = 0; i < prefixTestList.length; i++ ) {
      stickyText += 'position:' + prefixTestList[i] + 'sticky;';
    }
    var div = document.createElement('div');
    div.style.cssText = stickyText;
    document.body.appendChild(div);
    var isSupport = /sticky/i.test(window.getComputedStyle(div).position);
    document.body.removeChild(div);
    div = null;
    return isSupport;
}
```