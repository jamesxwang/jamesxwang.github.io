---
title: Whistle Proxy
date: 2021-02-13 15:19:16
tags: ["Study Notes", "Front End"]
---

> Front-end development environment switching artifact

During the development process, it is often the case that the back-end API is not yet complete or not published to the required environment.

In order not to block the front-end development, we can use whistle to proxy the request.

<!-- more -->

# Installation

首先，我们先安装whistle，可以参考官网教程: https://github.com/avwo/whistle

命令行中输入 `w2 start` 开启whistle，默认端口为`8899`

## Chrome Extension

访问：https://chrome.google.com/webstore/category/extensions， 搜索`Proxy SwitchyOmega`，将插件添加至Chrome中，添加一个whistle情景模式如图所示：

![whistle-1](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-1.png)

![whistle-2](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-2.png)

![whistle-3](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-3.png)


浏览器访问`http://127.0.0.1:8899/`即可进入配置页面。

## Enable Https proxy

下载根证书并安装它。

![whistle-4](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-4.png)

## Whistle Vase Plugin
然后，我们还需要安装一个插件，名为whistle.vase。
```bash
npm install -g whistle.vase
```
Unix / Linux用户需要加sudo进行安装：
```bash
sudo npm install -g whistle.vase
```

在插件一栏能看到vase即安装成功。

![whistle-5](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-5.png)

# Configuration
可以通过点击[Plugins](http://127.0.0.1:8899/#plugins)里的vase链接跳转或者直接访问 http://127.0.0.1:8899/whistle.vase/ 进入到vase的配置页。

vase有多种模板引擎，我们这里因为要mock接口数据，所以进行下图的操作：

![whistle-6](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-6.png)

script模板引擎的API如下：

1. [out](https://github.com/whistle-plugins/whistle.vase#outdata-delay-speed): 所有的数据都要通过该方法才能输出到响应中，也可以用 write
2. [status](https://github.com/whistle-plugins/whistle.vase/blob/master): 设置输出的http状态码，默认为200，也可以写成 statusCode(code)
3. [header](https://github.com/whistle-plugins/whistle.vase#headername-value): 设置响应头
4. [headers](https://github.com/whistle-plugins/whistle.vase#statuscode): 批量设置响应头
5. [file](https://github.com/whistle-plugins/whistle.vase#filepath): 读取本地文件
6. [get](https://github.com/whistle-plugins/whistle.vase#geturloptions): 通过get方式获取线上文件，支持https及http协议
7. [post](https://github.com/whistle-plugins/whistle.vase#posturloptions): 通过post方式获取线上文件，支持https及http协议
8. [request](https://github.com/whistle-plugins/whistle.vase#requestoptions): 通过自定义方式获取线上文件，支持https及http协议
9. [json](https://github.com/whistle-plugins/whistle.vase#jsondata): 将线上或本地文件、或字符串解析成json对象
10. [merge](https://github.com/whistle-plugins/whistle.vase#mergejson--jsonn): 合并json对象
11. [random](https://github.com/whistle-plugins/whistle.vase#randomarg1--argn): 随机输出
12. [join](https://github.com/whistle-plugins/whistle.vase#joinarr-seperator): 合并字符串
13. [req](https://github.com/whistle-plugins/whistle.vase#req%E5%AF%B9%E8%B1%A1): 用户请求对象
14. [render](https://github.com/whistle-plugins/whistle.vase#rendertpl-locals-enginetype): 渲染模板

更多API详情可以在这里看到：https://github.com/whistle-plugins/whistle.vase#script-api

# Mock ReSTful API

接下来我们可以使用 out(data, delay, speed) 去模拟接口返回的数据：

![whistle-7](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/whistle/whistle-7.png)

最后就是在Rules一栏新建一个规则，把 需要mock的接口地址 和刚刚创建的 vase script模板 用空格分开写到一行就可以啦：
```
https://iaas.cloud.tencent.com/cgi/capi?i=monitor/Describexxx vase://Describexxx
```
![whistle-8](https://cdn.jsdelivr.net/gh/jamesxwang/cdn/img/whistle/whistle-8.png)
