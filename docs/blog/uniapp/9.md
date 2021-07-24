--- 
title: uniapp开发app - 9.android证书的生产和指纹获取
date: 2020-12-18
categories: 
 - 前端
tags: 
 - android证书
 - uniapp
---


可能iOS下各种证书的繁杂，所以官方只给出了iOS系统下证书的生成说明，Android证书的生成的确很简单，我简单说明一下：
1. 安装JDK
2. 在cmd下，进入到JDK的bin目录，输入：

```
 keytool -genkey -alias testalias -keyalg RSA -validity 20000 -keystore test.keystore
 Enter keystore password:  //输入证书文件密码，输入完成回车  
Re-enter new password:   //再次输入证书文件密码，输入完成回车  
What is your first and last name?  
  [Unknown]:  //输入名字和姓氏，输入完成回车  
What is the name of your organizational unit?  
  [Unknown]:  //输入组织单位名称，输入完成回车  
What is the name of your organization?  
  [Unknown]:  //输入组织名称，输入完成回车  
What is the name of your City or Locality?  
  [Unknown]:  //输入城市或区域名称，输入完成回车  
What is the name of your State or Province?  
  [Unknown]:  //输入省/市/自治区名称，输入完成回车  
What is the two-letter country code for this unit?  
  [Unknown]:  //输入国家/地区代号（两个字母），中国为CN，输入完成回车  
Is CN=XX, OU=XX, O=XX, L=XX, ST=XX, C=XX correct?  
  [no]:  //确认上面输入的内容是否正确，输入y，回车  

Enter key password for <testalias>  
        (RETURN if same as keystore password):  //确认证书密码与证书文件密码一样（HBuilder|HBuilderX要求这两个密码一致），直接回车就可以
```
> 说明：testalias就是证书的别名，20000是证书的有效天数，test.keystore就是生成的证书名字。
3. 一路根据指示设置密码，组织等，注意密码是不会显示或者以＊＊＊代替，但是其实已经输入了。确认后选择Y，生成的证书会在bin目录下。
4. 获取证书的指纹，输入：

```
keytool -list -v -keystore "D:\Program Files\Java\jdk1.8.0_40\bin\yourapp.keystore" -alias yourapp
```
> 路径请使用自己安装JDK的路径代替。<br>这样就可以获取MD5、SHA1的证书指纹。
