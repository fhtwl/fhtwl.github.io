--- 
title: Markdown常用语法
date: 2019-06-20
categories: 
 - 其它
tags: 
 - markdown
---
## Markdown常用语法 

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

#### 标题
```
#  H1
##  H2
###  H3
####  H4
#####  H5
######  H6
```

#### 文本强调
```
*斜体* or _强调_
**加粗** or __加粗__
***粗斜体*** or ___粗斜体__
```

#### 列表

>无序列表
```
* 无序列表
* 子项
* 子项
 
+ 无序列表
+ 子项
+ 子项
 
- 无序列表
- 子项
- 子项
```

>有序列表
```
1. 第一行
2. 第二行
3. 第三行
 
1. 第一行
- 第二行
- 第三行
``` 

>组合
``` 
* 产品介绍（子项无项目符号）
    此时子项，要以一个制表符或者4个空格缩进
 
* 产品特点
    1. 特点1
    - 特点2
    - 特点3
* 产品功能
    1. 功能1
    - 功能2
    - 功能3
``` 

#### 超链接
>内嵌方式
```
[link text](https://www.google.com "title text")
```
>引用方式
```
[link text][id]
[id]: https://www.mozilla.org "title text"
```
>尖括号直接写链接
```
Email 邮件：
<example@example.com>
```
>使用html语法
```
<a href="https://github.com/fhtwl/fhtwl.github.io">fhtwl</a>   
```

#### 图片
>内嵌方式：
```
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "title text")
```

>引用方式：
```
![alt text][logo]
[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "title text"
```

#### 语法高亮
>文字高亮
```
`高亮`
```
>代码块 (html高亮)
```
```代码块```
```
>代码块 (其他语言高亮,css为例)
![alt text](/images/20190620/daimakuai_css.png "")

#### 引用
>在该行开头缩进4个空格或一个制表符(tab)
```
>鲁迅说：。。。
```

#### 换行
>在一行结尾处加上2个或2和以上空格
>使用html标签br
```
<br />
```

#### 水平分割线
>3个及3个以上的\`*\`或者\`-\`
```
*****
-------
```

#### 转义字符
>反斜杠
```
\反斜杠  `反引号  *星号  _下划线  {}花括号  []方括号  ()括弧  #井字号  +加号  -减号  .英文句 !感叹号
```