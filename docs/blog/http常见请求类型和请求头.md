--- 
title: http常见请求类型和请求头
date: 2020-12-18
categories: 
 - 前端
tags: 
 - http
---

## http

#### 1.http请求类型
* get
> 像指定资源发出请求
* post
* head 
> 类似get，但是服务端接收head请求后，只返回响应头，而不会发送响应内容。常用于查看页面状态
* options
> 测试服务器功能
* delete
> 请求删除
* trace
> 回显服务器收到的请求，主要用于测试和诊断
* connect
> HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。

#### 常见请求头
* accept
> 可接受的响应内容类型content-types
* accept-charset
> 可接受类型需要设置，如Accept-Charset: utf-8
* Cookie
* Content-Type
> 请求体的mine类型
* Origin
> 跨域



