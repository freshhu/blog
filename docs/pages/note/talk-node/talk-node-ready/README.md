
# nodeJS

## 一、nodeJS可以做什么

1. 轻量级、高性能的web服务
2. 前后端JavaScript同构开发
3. 便捷高效的前端工程化

## 二、Nodejs的架构和运行过程

分为以下四层结构：

Natives modules

Node c/c++ Bindings

v8、libuv 、c-ares(DNS)、 http parser、zlib（compression）、 ...

CPU / RAM / DISK / OS 

## 三、nodejs异步IO和事件驱动

（服务员点餐，只需要一个服务员去服务所有客户。多线程需要多个服务员等待客户点餐）

Reactor模式（应答者模式），单线程完成多线程工作。

Reactor模式下实现异步IO、事件驱动。Nodejs更使用于IO密集型高并发请求。不适合大量任务立即执行(非IO)的,大量复杂的业务。

​		**NodeJS异步IO**

![同步、异步](/blog/images/note/talk-node/image-readme1.png)

​		对于其他语言，系统并不知道异步是否完成，那么系统可以重复调用IO操作，判断IO是否结束，那么这就是轮询，常见轮询技术有：read、select、poll、kqueue、event ports，但这些对于代码而言还是同步的效果。

​		针对上面说法，我们期望的是实现无需主动判断的非阻塞IO，那么nodejs中的libuv库就实现了这个期望。

​		node中通过events模块的发布订阅模式进行事件驱动

## 四、Nodejs单线程

​		单线程如何实现高并发？ 通过异步非阻塞IO配合事件回调通知实现。

​		nodejs的单线程这个说法的意思是：nodejs主线程是单线程。

​		单线程处理cpu密集任务时，则会有缺点，会出现阻塞的现象。 

```javascript
const http = require('http')

// 模拟阻塞
function sleepTime(time){
    const sleep = Date.now()+time*1000
    while(Date.now()<sleep){}
    return
}
sleepTime(4)
const server = http.createServer((req,res)=>{
    console.log('服务启动了') // 延迟了4秒执行
})
```

## 五、Nodejs应用场景

1、作为中间层

![中间层](/blog/images/note/talk-node/image-readme2.png)

2、操作数据库提供API服务

3、实时的聊天应用程序

4、nodejs更加适合IO密集型任务。不适合大量业务逻辑，计算能力不是它的特色。

## 五、Nodejs全局对象

​	nodejs中的全局对象是global，global的根本作用就是作为宿主，全局对象可以看做是全局变量的宿主

​	nodejs常见全局变量：

- __filename:返回正在执行脚本文件的绝对路径
- __dirname:返回正在执行脚本所在目录
- timer类函数：执行顺序与事件循环间的关系
- process：提供与当前进程互动的接口
- require：实现模块的加载
- module、exports:处理模块的导出

```js
// 默认情况 this是空对象，和global并不是一样的,这是跟node模块实现有关的
console.log(this==global) // false

(function(){
   console.log(this==global) // true 
})()

　// 在函数中this指向的是global对象，和全局中的this不是同一个对象，简单来说，你在函数中通过this定义的变量就是相当于给global添加了一个属性，此时与全局中的this已经没有关系了。


```

```js
//全局中的this指向的是module.exports。
this.num = 10;
console.log(module.exports); {num:10}
console.log(module.exports.num);
```

process详解：

```js
// 1.获取进程信息-资源：CPU 内存
console.log(process.mempryUsage()) 
// rss:常驻内存 heapTotal：总的内存 heapUsed：已使用内存 external：扩展内存（底层模块c或者c++占据的内存大小） arrayBuffers：独立空间的大小，不占据v8内存。
console.log(process.cpuUsage()) // cpu内存
// user:用户占用cpu片段   system：操作系统占用cpu片段

// 2.运行环境： 运行目录、node环境、cpu架构、用户环境、系统平台
console.log(process.cwd()) // 运行目录，项目路径
console.log(process.version) //node版本
console.log(process.versions) // v8版本等很多信息
console.log(process.arch) // 获取本机的操作系统 比如x64
console.log(process.env.NODE_ENV) //获取环境 比如develop production
console.log(process.env.PATH) //获取系统的环境变量
console.log(process.env.USERPROFILE) // HOME
console.log(process.platfprm) // win32 获取操作系统
 // 3.运行状态：启动参数、PID、运行时间
console.log(process.argv) // 此时执行时【 node 文件路径 1 2 】最终打印 [node.exe,node当前文件的路径,1,2]
console.log(process.argv0) //快速拿到第一个值
console.log(process.pid) // 该执行的pid
console.log(process.uptime()) // 文件从运行开始到结束的时间

// 4.事件
// 1）退出：在当前脚本文件所有任务完成后触发 （里面只能写同步代码，异步代码是不支持的）
process.on('exit',(code)=>{
    console.log('exit'+code)
})
// 2）在退出之前触发（里面只能写同步代码，异步代码是不支持的）
process.on('beforeExit',(code)=>{
    console.log('before exit'+code)
})
console.log('代码执行完了')
// 以上三个打印输出的顺序是： 代码执行完了  、 before exit 0 、exit 0 

// 5. 标准输出 输入 错误
console.log = function(data){
    process.stdout.write('---'+data+'\n')
}
console.log(11) // ---11

// 面板中写入东西则会复制对应的内容输出
process.stdin.pipe(process.stdout)
```





