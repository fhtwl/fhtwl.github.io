--- 
title: m端页面初始化样式 
date: 2019-06-17
categories: 
 - 前端
tags: 
 - css
 - 移动端
---

### reset.css

``` css

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
sub,
sup,
tt,
var,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tfoot,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    zoom: 1;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font:400 1em/1 "Microsoft Yahei", "PingFang SC", "Avenir", "Segoe UI", "Hiragino Sans GB", STHeiti, "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif
}

.zoom{cursor:default;}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
    display: block;
}

/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    text-decoration: none;
}
li {
    cursor: pointer;
}
a span,a img,a span,a p {
    cursor: pointer;
}
.header {
    z-index: 9999;
}
a:focus{outline:none;}

```
