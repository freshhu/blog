(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{521:function(e,t,r){"use strict";r.r(t);var v=r(30),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"初识vue3-0-vite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初识vue3-0-vite"}},[e._v("#")]),e._v(" 初识Vue3.0 + vite")]),e._v(" "),r("blockquote",[r("p",[e._v("摘选自公众号")])]),e._v(" "),r("ClientOnly",[r("Valine")],1),e._v(" "),r("h4",{attrs:{id:"概要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),r("h6",[e._v(" 1. 创建一个vite项目 ")]),e._v(" "),r("h6",[e._v(" 2. vite简介 ")]),e._v(" "),r("h6",[e._v(" 3. vite详解 ")]),e._v(" "),r("h6",[e._v(" 4. hmr热更新 ")]),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"_1-创建一个vite项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个vite项目"}},[e._v("#")]),e._v(" 1. 创建一个vite项目")]),e._v(" "),r("ul",[r("li",[e._v("使用npm")])]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("npm init vite"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("app "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\ncd "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nnpm install \nnpm run dev\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("ul",[r("li",[e._v("使用yarn")])]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("yarn create vite"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("app "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\ncd "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nyarn \nyarn dev\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("h2",{attrs:{id:"_2-vite简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-vite简介"}},[e._v("#")]),e._v(" 2. vite简介")]),e._v(" "),r("p",[e._v("vite 是一个基于 Vue3 单文件组件的非打包开发服务器，它做到了本地快速开发启动：")]),e._v(" "),r("ol",[r("li",[e._v("快速的冷启动，不需要等待打包操作；")]),e._v(" "),r("li",[e._v("即时的热模块更新，替换性能和模块数量的解耦让更新飞起；")]),e._v(" "),r("li",[e._v("真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。")]),e._v(" "),r("li",[e._v("运行npm run dev，可以观察到这个项目是秒级打开，打开调试器可以看到\nvite是如何做到这些的呢？")])]),e._v(" "),r("h2",{attrs:{id:"_3-vite详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-vite详解"}},[e._v("#")]),e._v(" 3. vite详解")]),e._v(" "),r("h3",{attrs:{id:"_3-1-挖掘vite运行原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-挖掘vite运行原理"}},[e._v("#")]),e._v(" 3-1. 挖掘vite运行原理")]),e._v(" "),r("ul",[r("li",[e._v("vite项目明显的特征就是使用了ES Module,代码以模块的形式引入到文件，同时实现了按需加载。")]),e._v(" "),r("li",[e._v('其最大的特点是在浏览器端使用 export import 的方式导入和导出模块，在 script 标签里设置 type="module" ，然后使用 ES module')]),e._v(" "),r("li",[e._v("正因如此，vite高度依赖module script特性，也就意味着从这里开始抛弃了IE市场，参见Javascript MDN。")]),e._v(" "),r("li",[e._v("在这种操作下，伴随的另一个效果就是去掉了webpack打包步骤，不用再将各个模块文件打包成一个bundle，以便支持浏览器的模块化加载。\n"),r("ul",[r("li",[e._v("vite是如何处理这些模块的呢\n"),r("ul",[r("li",[e._v("关键在于vite使用Koa构建的服务端，在createServer中主要通过中间件注册相关功能")]),e._v(" "),r("li",[e._v("vite 对 import 都做了一层处理，其过程如下：\n"),r("ol",[r("li",[e._v("在 koa 中间件里获取请求 body")]),e._v(" "),r("li",[e._v("通过 es-module-lexer 解析资源 ast 拿到 import 的内容")]),e._v(" "),r("li",[e._v("判断 import 的资源是否是绝对路径，绝对视为 npm 模块")]),e._v(" "),r("li",[e._v('返回处理后的资源路径，例如："vue" => "/@modules/vue"')]),e._v(" "),r("li",[e._v("将处理的template,script,style等所需的依赖以http请求的形式，通过query参数形式区分并加载SFC文件各个模块内容")])])])])]),e._v(" "),r("li",[e._v("为什么这里需要@modules\n"),r("ul",[r("li",[r("code",[e._v("import vue from 'vue'")]),e._v(" "),r("ul",[r("li",[e._v("vue模块安装在node_modules中，浏览器ES Module是无法直接获取到项目下node_modules目录中的文件。所以vite对import都做了一层处理，重写了前缀使其带有@modules，以便项目访问引用资源；另一方面，把文件路径都写进同一个@modules中，类似面向切片编程，可以从中再进行其他操作而不影响其他部分资源，比如后续可加入alias等其他配置。")]),e._v(" "),r("li",[e._v("通过koa middleware正则匹配上带有@modules的资源，再通过require('XXX')获取到导出资源并返给浏览器。")])])])])])])])]),e._v(" "),r("h3",{attrs:{id:"_3-2-文件请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-文件请求"}},[e._v("#")]),e._v(" 3-2. 文件请求")]),e._v(" "),r("p",[e._v("单页面文件的请求有个特点，都是以*.vue作为请求路径结尾，当服务器接收到这种特点的http请求，主要处理：")]),e._v(" "),r("ul",[r("li",[e._v("根据ctx.path确定请求具体的vue文件")]),e._v(" "),r("li",[e._v("使用parseSFC解析该文件，获得descriptor，一个descriptor包含了这个组件的基本信息，包括template、script和styles等属性 下面是Comp.vue文件经过处理后获得的descriptor；\n"),r("br"),e._v("\n然后根据descriptor和ctx.query.type选择对应类型的方法，处理后返回ctx.body")]),e._v(" "),r("li",[e._v("type为空时表示处理script标签，使用compileSFCMain方法返回js内容")]),e._v(" "),r("li",[e._v("type为template时表示处理template标签，使用compileSFCTemplate方法返回render方法")]),e._v(" "),r("li",[e._v("type为styles时表示处理style标签，使用compileSFCStyle方法返回css文件内容\n在浏览器里使用 ES module 是使用 http 请求拿到的模块，所以 vite 必须提供一个web server 去代理这些模块，上文中提到的 koa中间件 就是负责这个事情，vite 通过对请求路径query.type的劫持获取资源的内容返回给浏览器，然后通过拼接不同的处理单页面文件解析后的各个资源文件，最后响应给浏览器进行渲染。\n"),r("br"),e._v("\n从另一方面来看，这也是一个非常有趣的方法，webpack之类的打包工具会把各种各样的模块提前打包进bundle中，但打包结果是静态的，不管某个模块的代码是否用得到，它都要被打包进去，显而易见的坏处就是随着项目越来越大，打包文件也越来越大。vite的优雅之处就在于需要某个模块时动态引入，而不是提前打包，自然而然提高了开发体验。")])]),e._v(" "),r("h2",{attrs:{id:"_4-hmr热更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-hmr热更新"}},[e._v("#")]),e._v(" 4. hmr热更新")]),e._v(" "),r("p",[e._v("vite的热更新主要有四步：")]),e._v(" "),r("ol",[r("li",[e._v("通过 watcher 监听文件改动")]),e._v(" "),r("li",[e._v("通过 server 端编译资源，并推送新资源信息给 client")]),e._v(" "),r("li",[e._v("需要框架支持组件 rerender/reload")]),e._v(" "),r("li",[e._v("client 收到资源信息，执行框架 rerender 逻辑。")])]),e._v(" "),r("p",[e._v("在client端，Websocket监听了一些更新的消息类型，然后分别处理：")]),e._v(" "),r("ul",[r("li",[e._v("vue-reload —— vue 组件更新：通过 import 导入新的 vue 组件，然后执行 HMRRuntime.reload")]),e._v(" "),r("li",[e._v("vue-rerender —— vue template 更新：通过 import 导入新的 template ，然后执行 HMRRuntime.rerender")]),e._v(" "),r("li",[e._v("vue-style-update —— vue style 更新：直接插入新的 stylesheet")]),e._v(" "),r("li",[e._v("style-update —— css 更新：document 插入新的 stylesheet")]),e._v(" "),r("li",[e._v("style-remove —— css 移除：document 删除 stylesheet")]),e._v(" "),r("li",[e._v("js-update —— js 更新：直接执行")]),e._v(" "),r("li",[e._v("full-reload —— 页面 roload：使用 window.reload 刷新页面\n在server端，通过watcher监听页面改动，根据文件类型判断是js Reload还是vue Reload。通过解析器拿到当前文件内容，并与缓存里的上一次解析结果进行比较，如果发生改变则执行相应的render。")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);