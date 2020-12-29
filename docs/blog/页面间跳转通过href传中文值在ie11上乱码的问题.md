--- 
title: 页面间跳转通过href传中文值在ie11上乱码的问题
date: 2020-05-07
categories: 
 - 前端
tags: 
 - js
 - ie
---

## 页面间跳转通过href传中文值在ie11上乱码的问题
使用href传中文参数，在ie11上回乱码<br>
解决这个，只需要在传参时将中文编码，取值时将中文解码<br>
* 编码encodeURI()
> 该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。<br>该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,# <br>
也就是说，这个方法基本只对中文有效，对字母、数字、（常用的）标点符号是无效的

* 解码unescape()
> 该函数的工作原理是这样的：通过找到形式为 %xx 和 %uxxxx 的字符序列（x 表示十六进制的数字），用 Unicode 字符 \u00xx 和 \uxxxx 替换这样的字符序列进行解码。
> 注释：ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。
```js
window.location.href = '/test.html?name='+encodeURI('张三')
...

var name = "${name!}";
name = unescape(name)
```



