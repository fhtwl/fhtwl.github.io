--- 
title: 前端Js处理百度地图和腾讯/高德地图经纬度不同的转换问题
date: 2020-06-10
categories: 
 - 前端
tags: 
 - js
 - map
---

## 前端Js处理百度地图和腾讯/高德地图经纬度不同的转换问题

```javascript
/**
   * 1腾讯/高德地图转百度地图经纬度
   */
  qqMapTransBMap(lng, lat) {
    let x_pi = 3.14159265358979324 * 3000.0 / 180.0;
    let x = lng;
    let y = lat;
    let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
    let lngs = z * Math.cos(theta) + 0.0065;
    let lats = z * Math.sin(theta) + 0.006;
    return {
      lng: lngs,
      lat: lats
    };
  }

  /**
   * 2百度转腾讯/高德
   */
  bMapTransqqMap(lng, lat) {
    let x_pi = (3.14159265358979324 * 3000.0) / 180.0;
    let x = lng - 0.0065;
    let y = lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    let lngs = z * Math.cos(theta);
    let lats = z * Math.sin(theta);
    return {
      longitude: lngs,
      latitude: lats
    };
  }

```
<a href="https://blog.csdn.net/a377342263/java/article/details/99411469">原文链接：https://blog.csdn.net/a377342263/java/article/details/99411469</a>


