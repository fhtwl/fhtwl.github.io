--- 
title: 前端Js监听打开全屏和关闭全屏
date: 2020-06-22
categories: 
 - 前端
tags: 
 - js
 - event
---

## 前端Js监听打开全屏和关闭全屏
直接上代码，主要问题集中在，全屏的时候监听不到keydown上面，通过checkFull方法解决了

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body id="dashboard_id">
    <div id="test">现在不是全屏</div>
    <input id="Button1" type="button" value="开始全屏" onclick="kaishi()" />
    <input id="Button2" type="button" value="关闭全屏" onclick="guanbi()" />
 
<script>

    let test = document.getElementById('test')
    window.onresize = function(){
        if(!checkFull()){
            //要执行的动作
            fn2()
        }
    }

    function checkFull(){
        var isFull = document.mozFullScreen||
		document.fullScreen ||
		//谷歌浏览器及Webkit内核浏览器
		document.webkitIsFullScreen ||
		document.webkitRequestFullScreen ||
		document.mozRequestFullScreen ||
		document.msFullscreenEnabled
		if(isFull === undefined) isFull = false;
		//console.log("isFull："+isFull)
        return isFull;
    }
    // 打开全屏回调
    function fn1() {
        test.innerText = '现已开启全屏'
    }
    //关闭全屏回调
    function fn2() {
        test.innerText = '现在不是全屏'
    }
    function kaishi() {
    
        var docElm = document.documentElement;
        //W3C
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        //FireFox
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        //Chrome等
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
        //IE11
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        fn1()
    }
 
    function guanbi() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fn2()
    }
 
    // document.addEventListener("fullscreenchange", function () {
    //     fullscreenState.innerHTML = (document.fullscreen) ? "" : "not ";
    // }, false);
 
    document.addEventListener("mozfullscreenchange", function () {
        fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";
    }, false);
 
    document.addEventListener("webkitfullscreenchange", function () {
        fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
    }, false);
 
    document.addEventListener("msfullscreenchange", function () {
        fullscreenState.innerHTML = (document.msFullscreenElement) ? "" : "not ";
    }, false);
</script>

  
</body>
</html>

```



