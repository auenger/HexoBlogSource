---
title: Hexo(Next) + GitHub + Netlify
date: 2018-11-06 18:16:12
tags: Hexo
categories: Hexo 教程
top: 1
image: https://i.loli.net/2018/11/12/5be8f3abb3203.jpg
---

** 18步搞定自动发布个人博客 **

<!-- more -->

本篇文章就是按照最基本的操作来完成的一个自动化博客搭建，完全的傻瓜式的操作，跟着教程绝对搞的定。

** 重点是这个教程是Windows系统的，OS/Linux自行根据步骤脑补一下 **

## 准备工作 ##
我们用到的主要环境就是Node.js，这玩意是根本，所以搞定它！

### 1、Node.js ###
官网直接下载完事，根据自己的系统整一个最新版的安装吧[没有环境的去下载](https://nodejs.org/en/download/)

### 2、GitBash ###
同样的另一个必要环节，Git没有的话也去下载安装一个,也搞最新的版本吧[没有的也去整一个](https://git-scm.com/downloads)

### 3、 检查环境是否搞定 ###
检查Node.js 有没有搞定
> node -v

![Node.js](https://i.loli.net/2018/11/09/5be52ef99d917.jpg)

检查GitBash有没有搞定直接选个文件夹鼠标右键就OK
![GitBash](https://i.loli.net/2018/11/09/5be52ef949c3c.png)

### 4、注册一个Github ###
Github我们直接注册一个，注册都不会的就放弃吧[GitHub](https://github.com/)

## 环境准备完毕，下面就正式开始了 ##

### 5、看心情选位置建个文件夹 ###
在当前文件夹下启动命令行，之前我们已经安装了gitbash所以可以直接右键启动gitbash或许方便一些
![gitbashhear.png](https://i.loli.net/2018/11/12/5be8d7fce5cdf.png)

### 6、安装hexo ###
下面重点就来了，我们用的是Hexo框架，Hexo本身就集成blog框架，而且目前已经有很多成熟的主题可以使用所以我们直接选择使用hexo

安装指令：
> npm install hexo -g

这个过程可能需要一点点时间，不要着急静静等待
![installHexoo.png](https://i.loli.net/2018/11/12/5be8d956353a5.png)

### 7、检查hexo是否成功安装 ###
 同样我们确认一下hexo是否成功安装
 > hexo -v

 ![hexo-v.png](https://i.loli.net/2018/11/12/5be8de7c63ff2.png)

### 8、hexo初始化 ###
成功安装完hexo，我们就可以对hexo进行初始化，就是拉取hexo的框架代码，这一步骤时间可能会久一点，毕竟是下载文件
> hexo init

等待的过程中你可以看见文件一点点被下载过来，最后你会看见提示 Start blogging with Hexo！是不是很激动了！
![hexointi.png](https://i.loli.net/2018/11/12/5be8da5f9b3c6.png)

### 9、安装需要的组件 ###
初始化完成后，我们需要继续安装hexo的其他组件
> npm install

![npm-install.png](https://i.loli.net/2018/11/12/5be8db3515f02.png)

### 10、hexo生成 ###
这时候我们不需要进行修改，先按照模板生成一下(hexo generate 可以直接简写如下)
> hexo g

我们可以直接看出指令帮我们生成了静态页面
![hexog.png](https://i.loli.net/2018/11/12/5be8dc5b5ddde.png)

### 11、hexo本地启动 ###
生成玩页面，我们就让服务在我们本地跑起来(hexo server 可以直接简写如下)
> hexo s

这时候本地默认使用的是4000端口，可能会被占用
![port4000.png](https://i.loli.net/2018/11/12/5be8dcf2e772e.png)
我们可以更换本地的端口号(hexo server -p 5000)
> hexo s -p 5000

![port5000.png](https://i.loli.net/2018/11/12/5be8dd781741e.png)
Hexo is running!Hexo is running!Hexo is running!

在浏览器打开[http://localhost:5000/](http://localhost:5000/) 我们就可以看到Hexo的默认blog主题
![hexoDefault.png](https://i.loli.net/2018/11/12/5be8ddd37e0d5.png)

### 12、新建一篇blog ###
我们回到刚刚的命令行，ctrl+c 停止服务，然后新建一片文章
> hexo new post "Hexo Hello World!"

![helloworld.png](https://i.loli.net/2018/11/12/5be8e20b6a122.png)
根据路径找到对应的 .md文件(\source\_posts\Hexo-Hello-World.md)就可以使用markdown写我们自己的东西了
然后使用
> hexo g

打包
> hexo s

启动服务，我们就可以看到我们自己新建的文章。

## 代码打包上传到并发布 ##
### 13、gitbash配置 ###
gitbash配置可以自行查找教程[附送一个传送门](https://blog.csdn.net/zzfenglin/article/details/53147840)

### 14、配置hexo的repository ###
找到当前文件下的 _config.yml 文件，在文件最后修改repository。
> deploy:
    type: git
    repository: https://github.com/youname/yourrepo.git
    branch: master

### 15、安装hexo打包拓展 ###
我们在使用打包提交之前需要先安装一个拓展插件
> npm install hexo-deployer-git --save

### 16、打包提交到github ###
使用打包与生成指令，生成静态页面并提交到github
> hexo d -g

提交成功后你就可以在你的GitHub上面看到自己提交的静态页面代码了

### 17、netlify自动部署 ###
我们可以使用[netlify](https://app.netlify.com/)进行GitHub代码的自动部署，并且可以使用netlify功能进行域名绑定和使用他免费的HTTPS证书。具体教程[传送门](https://www.cnblogs.com/codernie/p/9062104.html)。

### 18、自定义域名 ###
使用netlify的好处就是，我们可以开心的使用自己的域名进行访问（域名不备案也是可以使用的），我们在netlify设置成功后可以获得一个netlify的二级域名，这时候我们可以在自己的域名管理处设置一下CNAME把自己的域名解析到netlify，这样我们就可以开开心心的使用自己的域名访问自己的blog了！
![cname.png](https://i.loli.net/2018/11/12/5be8e7dd84669.png)

** 18步搞定个人站 **
