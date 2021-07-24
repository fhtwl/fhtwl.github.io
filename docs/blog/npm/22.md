--- 
title: npm换源
date: 2020-12-28
categories: 
 - 前端
tags: 
 - nodejs
 - npm
--- 
## npm换源

* 单次使用

``` sh
npm install --registry=https://registry.npm.taobao.org
```

* 永久使用

```sh
npm config set registry https://registry.npm.taobao.org
```

检测是否修改成功

``` sh
// 配置后可通过下面方式来验证是否成功
npm config get registry
// 或
npm info express
```

如果想还原

```sh
npm config set registry https://registry.npmjs.org/
```