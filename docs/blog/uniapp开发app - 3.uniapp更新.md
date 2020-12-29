--- 
title: uniapp开发app - 3.uniapp更新
date: 2020-03-27
categories: 
 - 前端
tags: 
 - uniapp
 - vue.js
 - js
---

## uniapp开发app（3）：uniapp更新
app的更新一般分为两种：整包更新和热更新
* 整包更新
> 整包更新，相当于给app一个安装包的地址，然后在浏览器下载安装
* 热更新
> 热更新，是在检测到需要升级时，下载升级包wgt文件，直接更新。这种方式更新包小，更新快，而且可以跳过审核，更新的用户体验更好。缺点是热更新需要是在基础配置、模块未更改时才能使用，也就是至少修改了src文件夹的开发文件时，才能使用，否则会有问题<br >
具体代码如下
``` javascript
// app 更新
import store from '@/store/index.js';
const isUpdete =  function() {
    let version_id
	
	// #ifdef APP-PLUS 
	plus.runtime.getProperty(plus.runtime.appid,function (inf) {
		version_id = inf.version
		uni.request({
			url: store.state.domain+'/api/open/info/open/market/appVersion/control/update.do?version_id='+version_id, 
			data: {
			},
			success: (res) => {
				if(res.data.data.state == 2) {
					
					let type = res.data.data.type
					let memo = res.data.data.memo
					let url = res.data.data.url
					if(type == 'hot') {
						uni.showModal({
							title:'更新提示',
							content:memo,
							success:(modelDate) =>{
								if (modelDate.confirm) {
									var wgtUrl=store.state.domain+url;  
									downWgt()
									function downWgt(){  
										plus.nativeUI.showWaiting("下载更新文件...");  
										plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){  
											if ( status == 200 ) {   
												console.log("下载更新文件："+d.filename);  
												installWgt(d.filename); // 安装wgt包  
											} else {  
												console.log("下载更新文件失败！");  
												plus.nativeUI.alert("下载更新文件失败！");  
											}  
											plus.nativeUI.closeWaiting();  
										}).start();  
									}
									function installWgt(path){  
										plus.nativeUI.showWaiting("安装wgt文件...");  
										plus.runtime.install(path,{farce:true},function(){  
											plus.nativeUI.closeWaiting();  
											console.log("安装更新文件成功！");  
											plus.nativeUI.alert("应用资源更新完成！",function(){  
												plus.runtime.restart();  
											});  
										},function(e){  
											plus.nativeUI.closeWaiting();  
											console.log("安装更新文件失败["+e.code+"]："+e.message);  
											plus.nativeUI.alert("安装更新文件失败["+e.code+"]："+e.message);  
										});  
									}
								}
							}
						})
					}
					else if(type == 'apk') {
						uni.showModal({ //提醒用户更新  
							title: "更新提示",  
							content: memo,  
							success: (modelDate) => {  
								if (modelDate.confirm) {  
									plus.runtime.openURL(store.state.domain+url);  
								}  
							}  
						}) 
					}
					
				}
				
			},
			fail:(res) => {
				
			}
		});
	})
	
	// #endif 
	
}
export {
	isUpdete
}

```

store.state.domain是对应的域名，version_id是版本号 <br>
这里更新需要注意的，获取版本号的问题
> app的版本号，指的是manifest里写的版本号，也就是manifest文件里的versionName属性，所以使用的是plus.runtime.getProperty
