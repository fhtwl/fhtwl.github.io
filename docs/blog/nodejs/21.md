--- 
title: 使用nodejs + ts + koa搭建服务端脚手架 --- 1. 环境搭建
date: 2021-07-21
categories: 
 - 后端
tags: 
 - js
 - ts
 - nodejs
 - koa2
 - cli
---

## 使用nodejs + ts + koa搭建服务端脚手架 --- 1. 环境搭建

#### ts 环境搭建
1. 全局安装ts
```
npm i typescript -g
```
2. 创建package.json：
``` sh
npm init
```
3. 创建tsconfig.json
``` sh
tsc --init
```
tsconfig.json就是ts项目的配置文件。<br />

打开tsconfig.json，修改以下参数：

```js
{
  "compilerOptions": {
    "target": "ES2015",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": [
      "es2015",
      "ESNext",
      "DOM"
    ],                                   /* Specify library files to be included in the compilation. */
    "declaration": false,                         /* Generates corresponding '.d.ts' file. */
    "sourceMap": false,                           /* Generates corresponding '.map' file. */
    "outDir": "./dist/",                           /* Redirect output structure to the directory. */
    "rootDir": "./src/",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "strict": true,                                 /* Enable all strict type-checking options. */
    "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./src",                             /* Base directory to resolve non-absolute module names. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    "src/**/*"
  ],
  "files": [
    "./src/app.ts"
  ]
}


```

我们需要关注的属性，主要是以下几个：

1. compilerOptions.target: 最后编译的代码的es版本

2. compilerOptions.module: 指定生成哪个模块系统代码

3. compilerOptions.lib: 编译过程中需要引入的库文件的列表

4. compilerOptions.outDir: 输出目录

5. compilerOptions.include： 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）

6. compilerOptions.files: 指定哪些文件使用该配置（属于手动一个个指定文件）

其它的可以去查看官方文档 <br>

3. 创建开发目录

    在根目录下创建src目录，并新建一个app.ts，这个就是我们项目的入口文件

``` typescript
// app.ts
export default class App {
    
}

```
然后编译项目，命令行输入：

```
tsc
```
编译完成之后，就能在根目录下的dist目录下看到编译的js文件

#### nodejs、koa环境搭建

1. 安装koa

命令行输入：
```
npm i koa @types/koa --save
```

修改app.ts，引入koa

``` ts
// app.ts
// 引入koa和http模块
import Koa from "koa"
import http from 'http'
const app = new Koa()
const server: http.Server = new http.Server(app.callback())
app.use(async ctx => {
  ctx.body = 'Hello World';
});
// 启动服务器，监听3001端口
server.listen(3001,()=> {
    console.log('app started at port 3001...')
})

```

2. 运行项目

运行ts的方法有两种，一种是编译为js后再运行：

```
tsc
nodejs ./dist/app.js
```

第二种方式更加方便，使用<b>ts-node</b>直接运行ts文件

```
npm i ts-node
ts-node ./src/app.ts
```

项目运行成功之后，我们就能在命令行中看到我们console的文字:

> app started at port 3001...

打开浏览器，访问localhost:3001，也能在页面上看到我们返回给浏览器的文字：

> Hello World

3. 监听文件变化并自动更新程序

目前我们已经启动了服务器，但是没当我们修改的代码，都需要程序启动项目，才能更新，这太麻烦。<br />

我们可以使用<b>nodemon</b>，来帮助我们实现监听文件变化并自动重新启动nodejs的应用程序：

```
npm i nodemon

```

打开package，在scripts里，添加一行：

``` json
"scripts": {
    "dev": "nodemon --watch 'src/**/*' -e ts,tsx --exec 'ts-node' ./src/app.ts"
},
```

通过命令行运行：

```
npm run dev
```

这时可以发现，当我们保存的文化，程序就会自动更新。

#### 总结

在上述内容里，我们创建了一个nodejs、ts、koa的服务端项目，安装了核心的依赖包，通过代码运行起了服务器，并实现了监听文件变化并自动刷新。



















