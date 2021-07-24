--- 
title: 自定义样式audio音频播放器
date: 2019-06-28
categories: 
 - 前端
tags: 
 - audio
 - H5
 - js
 - 播放器
---

## 自定义样式h5播放器

h5视频播放器的样式还能凑合，但是音频播放器实在太难看，与设计稿相差太远，只能自己写一个。  

当前的思路是，原生audio不显示控件，然后通过另写的样式和标签，通过各种事件和audio方法控制隐藏的audio，而audio只需要发出声音即可  
最终效果如下：  
![alt text](/images/20190628/audio.png " ")  

一、获取元素
```html
<div class="yinpin_right_controls clearbox">
    <a href="#" class="yinpin_prev"><img src="prev.png" alt=""></a>
    <span class="yinpin_controls_play"></span>
    <a href="#" class="yinpin_next"><img src="next.png" alt=""></a>
</div>
<div class="h5-audio">
    <div class="yinpin_jindu">
        <div class="yinpin_guidao"> <!-- 轨道 -->
            <div class="yinpin_yibofang"> <!-- 播放的进度 -->
                <div class="yinpin_huakuai"></div> <!-- 滑块 -->
            </div>
        </div>
    </div>
    <div class="yinpin_time"><span id="dangqian">0</span>/<span id="duration"></span></div> <!-- 时间进度 -->
    <audio id="audio"> <!-- 隐藏的audio -->
        <source src="/skin/6191/PC/Zixin/images/yinpin/2.mp3" type="audio/ogg">
            您的浏览器不支持 audio 元素。
    </audio>
</div>

```
``` javascript
// 获取audio
var audio = document.getElementById("audio");
//显示时间
var duration = document.getElementById("duration");
if(audio != null){
    audio.load();
    audio.oncanplay = function () {  
        duration_num = audio.duration
        duration_num = transTime(duration_num)
        duration.innerText = duration_num
    }
}

//转换音频时长显示
function transTime(time) {
    var duration = parseInt(time);
    var minute = parseInt(duration/60);
    var sec = duration%60+'';
    var isM0 = ':';
    if(minute == 0){
        minute = '00';
    }else if(minute < 10 ){
        minute = '0'+minute;
    }
    if(sec.length == 1){
        sec = '0'+sec;
    }
    return minute+isM0+sec
}

```
二、播放暂停控制功能
``` javascript
var yinpin_controls_play = document.getElementsByClassName('yinpin_controls_play')[0];
yinpin_controls_play.onclick = function () {
    if(audio.paused) {//判断是否暂停
        audio.pause()
    }
    else {
       audio.play() 
    }
}

```
三、进度条更新
``` javascript
audio.addEventListener('timeupdate',updateProgress,false);
//更新进度条
function updateProgress() {
    var yinpin_yibofang = document.getElementsByClassName('yinpin_yibofang')[0];
    var value = Math.round((Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100, 0);
    yinpin_yibofang.style.width = value+ '%';
    dangqian.innerText = transTime(Math.floor(audio.currentTime))
}
```
四、点击轨道跳转进度
``` javascript
// 点击进图条跳转进度
var yinpin_guidao = document.getElementsByClassName('yinpin_guidao')[0];
yinpin_guidao.onclick= function (e) {
    var pgsWidth = $('.yinpin_yibofang').width();
    var rate = e.offsetX/$(this).width();
    audio.currentTime = audio.duration * rate;
    updateProgress();
};
```


