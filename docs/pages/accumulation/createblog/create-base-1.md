
# VuePress搭建博客并发布到GitHub Pages
VuePress 是一个静态网站生成工具，带有一个默认主题。由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。

VuePress开发的目的本来是为了支持Vue子项目的文档需求。但是它用来搭建个人博客也很方便，自带的主题也非常简洁清爽，还可以灵活更改网页主题的配置，所以就打算把个人博客从Jekyll迁移到VuePress上。[VuePress](https://vuepress.vuejs.org/)的官方文档 和 [中文文档](https://vuepress.docschina.org/)在这里。

## 开始上手
事实上文档中已经介绍了如何快速构建一个VuePress项目。不过由于VuePress的文档也是由VuePress来实现的，所以我就参考了VuePress中文文档的仓库 进行一些修改。

1.首先安装NodeJS与yarn
Windows下安装NodeJS非常方便，只需要到 [Node.js中文网](http://nodejs.cn/) 就可以看到下载页面。下载完成后双击进行安装。

在 [Yarn中文官网] 下载安装文件并运行即可安装Yarn。

在cmd中输入下面的命令，如果看到版本号说明已经安装成功。

```bash
node -v
yarn -v
```

> 兼容性注意事项
>
> VuePress 要求 Node.js >= 8。

2.全局安装VuePress

```bash
npm install -g vuepress
```

3.克隆VuePress仓库

```bash
git clone https://github.com/docschina/vuepress.git
```

4.添加默认主题

```bash
cd vuepress
yarn add vuepress-theme-vue
```

5.本地查看是否正常打开

```bash
cd docs
vuepress dev
```

6.打开http://localhost:8080/  能够访问说明可以启动了

## 配置网站

先看一下docs的目录结构

```
├─.vuepress
│  ├─components
│  └─public
│      └─icons
│   └─config.js // 配置文件
├─config // Vuepress文档的配置参考内容
├─default-theme-config // Vuepress文档的默认主题配置内容
├─guide // Vuepress文档的指南内容
└─zh // 中文文档目录
    ├─config
    ├─default-theme-config
    └─guide
└─README.md // 首页配置文件
```

- 首页配置

默认主题提供了一个首页布局，要使用它，你需要在根目录的 `README.md` 的 [YAML front matter](https://vuepress.docschina.org/guide/markdown.html#链接-links) 中指定`home: true` ，其他配置如下：

```yaml
home: true // 是否使用Vuepress默认主题
heroImage: /hero.png // 首页的图片
actionText: Get Started →  // 按钮的文字
actionLink: articles
features: // 首页三个特性
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You // 页尾
```

- 导航配置

导航配置文件在 `.vuepress/config.js` 中。

配置文件中nav控制导航栏链接，可以改变导航栏的标题，链接到自己的博客目录。

```js
nav: [
    {
        text: 'Guide',
        link: '/guide/',
    },
    {
        text: 'Config Reference',
        link: projects
    },
    {
        text: 'Default Theme Config',
        link: projects
    }
]
```

- 侧边栏配置

侧边栏的配置也在 `.vuepress/config.js` 中。

```js
sidebar: {
          '/guide/': genSidebarConfig('指南')//设定侧边栏的函数，参数是名称
        }
function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,//是否可折叠
      children: [ //文章目录，构建出来的网页会按照顺序链接
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
```

其他配置方法可参考官方文档。

## 构建与部署

Github Pages 是面向用户、组织和项目开放的公共静态页面搭建托管服务，站点可以被免费托管在 Github 上，你可以选择使用 Github Pages 默 认提供的域名 github.io 或者自定义域名来发布站点。不仅免除了租服务器的麻烦，而且部署起来非常轻松。简而言之，在GitHub Pages上发布博客是非常好的选择。

1. 在本地安装Git并注册GitHub账号

2. 创建仓库

   创建一个名为 `blog` 的仓库。

3. 修改自动构建与部署脚本

   脚本在`vuepress/scripts/deploy-gh.sh` 中。

```bash
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git pull
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址  master:gh-pages（打包好的文件存储分支的地方）
git push -f https://github.com/<username>/blog.git master:gh-pages

cd -

```

1. 同理这里的`<username>` 要改成自己GitHub的用户名。

   执行脚本 `./deploy-gh.sh` ，你的博客就会发布到GitHub Pages上啦。

2. 打开网址 https://username.github.io/，就可以看到已经构建好的博客网站。

## 注意事项

1.github上新创建项目的默认分支为main  ，而发布博客的默认分支为master，此处要检查一下github上的默认分支情况

2.注意设置Pages

![item2](/blog/images/accumulation/createblog/create-blog-img1.png)