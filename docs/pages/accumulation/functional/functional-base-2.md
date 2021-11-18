
# Puppeteer 服务端实现网页生成PDF
开发工作中，需要实现网页生成 PDF 的功能，生成的 PDF 需上传至服务端，将 PDF 地址作为参数请求外部接口，这个转换过程及转换后的 PDF 不需要在前端展示给用户。该功能不需要在前端展示给用户，为节省客户端资源，选择在服务端实现网页生成 PDF 的功能。

## 安装
```js
// npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i puppeteer --save

```
需注意的是，安装 puppeteer 时，会下载与 API 一起使用的最新版本的 Chromium 浏览器

## 使用
后端需要node环境，并使用node执行以下js文件
```js
// 引入的方式
const puppeteer = require('puppeteer'); // 引入模块
const options = process.argv; // java环境的一些可以获取到的参数

(async() => {
    const browser = await puppeteer.launch(); // 启动浏览器
    const page = await browser.newPage(); // 打开新页面

    // 设置权限并模拟登陆，因为截图的页面是系统里面的页面，则需要登陆后才能访问对应的页面
    const userAgent = "Mozilla/5.0 (Linux; Android 8.1.0; MI 8 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36";
    page.setUserAgent(userAgent); // 设置权限

    await page.setViewport({ width: 1200, height: 800}); // 设置页面视图的大小

    await page.goto('http://10.1.10.41:8093');
    await page.click(".main_title");
    const username =await page.$("input[name='username']");

    await username.type("liuweicheng@hatech.com.cn"); // 节点交互，模拟输入用户名

    const password =await page.$("input[name='password']");

    await password.type("a123456"); // 节点交互，模拟输入密码

    const userLoginBtn = await page.$(".submit-btn");  //找到个人登录按钮
    await userLoginBtn.click();  //点击个人登录按钮
    await page.waitForNavigation(); //等待页面跳转
    await page.waitForTimeout(3000);


    // 截图
    // await page.screenshot({path: 'test1.png'
    //     ,fullPage: false,clip: {
    //         x: 500,   // x coordinate
    //         y: 500,   // y coordinate
    //         width: 480,      // width
    //         height: 150   // height
    //     }
    // }
    // );

    // 生成pdf
      const _path = path.resolve(config.uploadDir, key) // 储存路径
      await page.pdf({ path: _path, format: 'a4' })

    // 关闭浏览器
    await browser.close();
})();


```

