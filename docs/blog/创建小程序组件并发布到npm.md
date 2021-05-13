--- 
title: 创建小程序组件并发布到npm
date: 2021-05-13
categories: 
 - 前端
tags: 
 - 小程序
 - npm
---

## 创建小程序组件并发布到npm

1. 初始化项目
创建项目目录，并初始化node环境
```
npm init
```
执行后，会提示需要输入项目名等等

2. 在项目根目录创建src目录，并讲组件的index.js、index.whml、index.json、index.wxss文件放到scr目录

3. 修改package.json
``` json
{
  "name": "fhtwl-miniprogram-pagination",
  "version": "1.0.3",
  "description": "微信小程序分页组件",
  "miniprogram": "src",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://gitee.com/fhtwl/fhtwl-miniprogram-pagination.git"
  },
  "keywords": [
    "miniprogram",
    "pagination"
  ],
  "author": "fhtwl",
  "license": "ISC"
}


```
需要注意的是，必须要有构建文件生成目录，由miniprogram字段指定

4. 发布到npm

    4.1. 注册npm账号
    需要注意的是，注册后，需要验证邮箱

    4.2. 将源切换为npm（如果之前没有将源切换为淘宝，则可跳过）

    ``` sh
    npm config set registry=http://registry.npmjs.org
    ```
    4.3. 登录到npm
    ``` sh
    npm login
    ```
    会要求输入用户名、密码、邮箱
    4.4 发布到npm
    在项目根目录运行npm publish
    ```
    npm publish
    ```
    如果失败，需确认该包名是否已被注册，如果是的，就换一个

5. 在项目中使用

    5.1 下载包
    在小程序项目根目录执行npm install --save fhtwl-miniprogram-pagination
    ``` sh
    npm install --save fhtwl-miniprogram-pagination
    ```

    5.2 构建npm
    在小程序开发者工具里，点击工具-构建 npm，会将node_modules里的包构建到miniprogram_npm目录下。在本地设置中还要勾选使用npm模块选项

    5.3 引入组件
    在引入组件的json中配置：
    ``` json
    {
        "usingComponents": {
            "pagination": "/miniprogram_npm/fhtwl-miniprogram-pagination"
        }
    }
    ```
    配置好后即可在wxml文件中使用
    <pagination wx:if="{{pageTotal > 0}}" bind:pageChange="pageChange" pages="{{pageTotal}}"></pagination>

    5.4 引入包（如果是安装的包是函数，而不是组件）
    只需要引入js即可：
    ``` js
    const myPackage = require('packageName')
    ```

6. 维护和更新

    后续还可能需要迭代版本

    6.1. 使用git维护版本

        6.1.1. 初始化git环境
            创建git目录
            ```
            git init
            ```
        6.1.2. 在github上创建仓库
        6.1.3. 设置远程仓库
            设置账户
            ```
            git config --global user.name "fhtwl"
            git config --global user.email "fhtwl@159xxxxxxx.com"
            
            ```
            添加远程仓库
            ```
            git remote add origin "https://gitee.com/fhtwl/fhtwl-miniprogram-pagination.git"
            ```

    6.2. 将新版本推送到npm
    
        6.2.1. 更新版本号
            执行 npm version <update_type>
            ```
            npm version patch
            ```
            update_type 有3个值：patch, minor, or majorpatch 分别表示小补丁、小改、大改 <br>
            执行后package.json会根据 update_type 的值而更新变化<br>
        
        6.2.2. 推送到npm
            执行 npm poblish
            ```
            npm poblish
            ```
