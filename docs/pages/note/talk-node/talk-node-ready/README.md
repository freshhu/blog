
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

