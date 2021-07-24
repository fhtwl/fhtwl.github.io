--- 
title: mysql基础语法学习
date: 2020-05-30
categories: 
 - 后端
tags: 
 - mysql
---

## mysql基础语法学习

* 登录mysql
```shell
mysql -u root -p root;
password
use text; ## 操作mysql数据库test，使用该命令后所有Mysql命令都只针对该数据库。
show databases; ##列出mysql数据库管理系统的数据库列表
show tables;##显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。
show columns from 数据表;##显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
```



