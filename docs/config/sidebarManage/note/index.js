/** 学习笔记 **/
/**
 * 学习笔记
 * front-review  前端知识回顾
 * js-development JavaScript语言新发展
 * wechat-applet 微信小程序
 * talk-node  大话NodeJS72般变化
 * front-engineering  前端工程化
 * front-performance  前端性能优化与工程化
 * css-advanced CSS古话今说与网站重构
 * front-frame  MVC、MVVM框架那些事
 * flutter
 * uniapp
 * front-crossover  前端跨界AI、IOS、PC、Android、IOT
 * python
 * data-structure  数据结构与算法JavaScript实践
 * front-graphics  JavaScript图形学和H5游戏
 * front-hacker  设计模式与网络安全专场
 */

/**
 * front-review  前端知识回顾
 *  1. review-javascript  javascript复习
 *  2. review-linux  linux复习
 */
const reviewJavascriptConfig = require("./front-review/review-javascript");
const reviewLinuxConfig = require("./front-review/review-linux");
/**
 *  css-advanced CSS古话今说与网站重构
 *    1. css-advanced-ready 基础准备
 *       1-1. css-pretreatment  Less&Sass入门
 *       1-2. css-core-skill  CSS3其他核心技巧
 *     
 *    2. css-advanced-note  笔记
 */
// css-advanced-ready 基础准备
const cssPretreatmentConfig = require("./css-advanced/css-advanced-ready/css-pretreatment");
const cssCoreSkillConfig = require("./css-advanced/css-advanced-ready/css-core-skill");
// css-advanced-note  笔记
const cssAdvancedNoteConfig = require("./css-advanced/css-advanced-note/css-advanced-note");

/*
* js-development JavaScript语言新发展
*   1. js-ready 基础准备
*     1-1 js-ready-html  html预备进阶
*     1-2 js-ready-css  css预备进阶
*     1-3 js-ready-javascript  javascript预备进阶
*     1-4 js-ready-linux  linux预备进阶
*     1-5 js-ready-other  其他预备进阶

*   2. js-develop-note  笔记
*/
// 1 js-ready 基础准备
const jsReadyHtmlConfig = require("./js-development/js-ready/js-ready-html");
const jsReadyCssConfig = require("./js-development/js-ready/js-ready-css");
const jsReadyJavascriptConfig = require("./js-development/js-ready/js-ready-javascript");
const jsReadyLinuxConfig = require("./js-development/js-ready/js-ready-linux");
const jsReadyOtherConfig = require("./js-development/js-ready/js-ready-other");
// 2. js-develop-note  笔记
const jsDevelopNoteConfig = require("./js-development/js-note/js-develop-note");

/**
 *  talk-node  大话NodeJS72般变化
 *    1. talk-node-ready  基础准备
 *      1-1. node-base-api  NodeJS基础API
 *      1-2. node-express  express入门必看
 *      1-3. node-koa KOA1入门必看
 *      1-4. node-work  Node实战小项目
 * 
 *    2. talk-node-note  笔记
 */
// talk-node-ready 基础准备
const nodeBaseApiConfig = require("./talk-node/talk-node-ready/node-base-api");
const nodeExpressConfig = require("./talk-node/talk-node-ready/node-express");
const nodeKoa1Config = require("./talk-node/talk-node-ready/node-koa1");
const nodeKoa2Config = require("./talk-node/talk-node-ready/node-koa2");
const nodeWorkConfig = require("./talk-node/talk-node-ready/node-work");
// talk-node-note  笔记
const talkNodeNoteConfig = require("./talk-node/talk-node-note/talk-node-note");

/**
 *  wechat-applet 微信小程序
 */
// 微信小程序
const wechatAppletNoteNoteConfig = require("./wechat-applet/wechat-applet-note");

/**
 *  front-engineering  前端工程化
 *    1. front-engineering-ready 基础准备
 *      1-1. front-building-tools  常用前端构建工具入门
 * 
 *    2. front-engineering-note  笔记
 */
// front-engineering-ready 基础准备
const frontBuildingToolsConfig = require("./front-engineering/front-engineering-ready/front-building-tools");
// front-engineering-note  笔记
const frontEngineeringNoteConfig = require("./front-engineering/front-engineering-note/front-engineering-note");

/**
 *  front-performance  前端性能优化与工程化
 *    1. front-performance-ready 基础准备
 *      1-1. front-technical-optimization  性能优化常用技术手段
 *      1-2. front-senior-debug  前端工程师高级调试
 * 
 *    2. front-performance-note  笔记
 */
// front-performance-ready 基础准备
const frontTechnicalOptimizationConfig = require("./front-performance/front-performance-ready/front-technical-optimization");
const frontSeniorDebugConfig = require("./front-performance/front-performance-ready/front-senior-debug");

// front-performance-note  笔记
const frontPerformanceNoteConfig = require("./front-performance/front-performance-note/front-performance-note");

/**
 *  front-frame  MVC、MVVM框架那些事
 *    1. front-frame-ready 基础准备
 *      1-1. front-ts-intro  Typescript入门
 *      1-2. front-vue-intro  vue入门必学
 *      1-3. front-angular-intro  AngularJS入门必学
 *      1-4. front-react-intro  React入门必学
 * 
 *    2. front-frame-note  笔记
 */
// front-frame-ready 基础准备
const frontTsIntroConfig = require("./front-frame/front-frame-ready/front-ts-intro");
const frontVueIntroConfig = require("./front-frame/front-frame-ready/front-vue-intro");
const frontAngularIntroConfig = require("./front-frame/front-frame-ready/front-angular-intro");
const frontReactIntroConfig = require("./front-frame/front-frame-ready/front-react-intro");
// front-frame-note  笔记
const frontFrameNoteConfig = require("./front-frame/front-frame-note/front-frame-note");

/**
 *  data-structure  数据结构与算法JavaScript实践
 *    1. data-structure-ready 基础准备
 *      1-1. structure-js-top  数据结构和算法JavaScript实践【上】
 *      1-2. structure-js-mid  数据结构和算法JavaScript实践【中】
 *      1-3. structure-js-bot  数据结构和算法JavaScript实践【下】
 *      1-4. structure-thorough  数据结构和算法深入提升
 * 
 *    2. data-structure-note  笔记
 */
// data-structure-ready 基础准备
const structureJsTopConfig = require("./data-structure/data-structure-ready/structure-js-top");
const structureJsMidConfig = require("./data-structure/data-structure-ready/structure-js-mid");
const structureJsBotConfig = require("./data-structure/data-structure-ready/structure-js-bot");
const structureThoroughConfig = require("./data-structure/data-structure-ready/structure-thorough");
// data-structure-note  笔记
const dataStructureNoteConfig = require("./data-structure/data-structure-note/data-structure-note");

/**
 *  front-graphics  JavaScript图形学和H5游戏
 *    1. front-graphics-ready 基础准备
 *      1-1. graphics-canvas  Canvas入门
 *      1-2. graphics-cocos2d-top  Cocos2d-JS快速入门【上】
 *      1-3. graphics-cocos2d-bot  Cocos2d-JS快速入门【下】
 *      1-4. graphics-webgl-top  WebGL深入浅出【上】
 *      1-5. graphics-webgl-mid  WebGL深入浅出【中】
 *      1-6. graphics-webgl-bot  WebGL深入浅出【下】
 *      1-7. graphics-three-top  Three.js系列课程【上】
 *      1-8. graphics-three-mid  Three.js系列课程【中】
 *      1-9. graphics-three-bot  Three.js系列课程【下】
 * 
 *    2. front-graphics-note  笔记
 */
// front-graphics-ready 基础准备
const graphicsCanvasConfig = require("./front-graphics/front-graphics-ready/graphics-canvas");
const graphicsCocos2dTopConfig = require("./front-graphics/front-graphics-ready/graphics-cocos2d-top");
const graphicsCocos2dBotConfig = require("./front-graphics/front-graphics-ready/graphics-cocos2d-bot");
const graphicsWebglTopConfig = require("./front-graphics/front-graphics-ready/graphics-webgl-top");
const graphicsWebglMidConfig = require("./front-graphics/front-graphics-ready/graphics-webgl-mid");
const graphicsWebglBotConfig = require("./front-graphics/front-graphics-ready/graphics-webgl-bot");
const graphicsThreeTopConfig = require("./front-graphics/front-graphics-ready/graphics-three-top");
const graphicsThreeMidConfig = require("./front-graphics/front-graphics-ready/graphics-three-mid");
const graphicsThreeBotConfig = require("./front-graphics/front-graphics-ready/graphics-three-bot");
// front-graphics-note  笔记
const frontGraphicsNoteConfig = require("./front-graphics/front-graphics-note/front-graphics-note");

/**
 *  front-hacker  设计模式与网络安全专场
 *    1. front-hacker-ready 基础准备
 *      1-1. design-pattern-top  常用设计模式【上】
 *      1-2. design-pattern-bot  常用设计模式【下】
 * 
 *     2. front-hacker-note  笔记
 */
// front-hacker-ready 基础准备
const designPatternTopConfig = require("./front-hacker/front-hacker-ready/design-pattern-top");
const designPatternBotConfig = require("./front-hacker/front-hacker-ready/design-pattern-bot");
// front-hacker-note  笔记
const frontHackerNoteConfig = require("./front-hacker/front-hacker-note/front-hacker-note");

/**
 *  front-crossover  前端跨界AI、IOS、PC、Android、IOT
 *    1. front-crossover-ready 基础准备
 *      1-1. front-mobile-build  Android&iOS开发环境搭建
 *      1-2. front-rnco-intro  ReactNative&Cordova入门
 *      1-3. front-embed-intro  前端跨界PC与嵌入式
 *      1-4. front-python-intro  走进Python的世界
 * 
 *    2. front-crossover-note  笔记
 */
// front-crossover-ready 基础准备
const frontMobileBuildConfig = require("./front-crossover/front-crossover-ready/front-mobile-build");
const frontRncoIntroConfig = require("./front-crossover/front-crossover-ready/front-rnco-intro");
const frontEmbedIntroConfig = require("./front-crossover/front-crossover-ready/front-embed-intro");
const frontPythonIntroConfig = require("./front-crossover/front-crossover-ready/front-python-intro");
// front-crossover-note  笔记
const frontCrossoverNoteConfig = require("./front-crossover/front-crossover-note/front-crossover-note");


/**
 * 2. uniapp
 */
// uniapp
const uniappNoteNoteConfig = require("./uniapp/uniapp-note");

/**
 * 2. flutter
 */
// flutter
const flutterNoteNoteConfig = require("./flutter/flutter-note");


/**
 * 2. python
 */
// python
const pythonNoteNoteConfig = require("./python/python-note");



module.exports = {
    '/pages/note/front-review/': [
        '',
        reviewJavascriptConfig, // javascript复习
        reviewLinuxConfig // linux复习
    ],
    // JavaScript语言新发展-基础准备
    '/pages/note/js-development/js-ready/': [
        '',
        jsReadyHtmlConfig, // html预备进阶
        jsReadyCssConfig, // css预备进阶
        jsReadyJavascriptConfig, // js预备进阶
        jsReadyLinuxConfig, // linux预备进阶
        jsReadyOtherConfig, // 其他预备进阶
    ],
    // JavaScript语言新发展-笔记
    '/pages/note/js-development/js-note/': [
        '',
        jsDevelopNoteConfig // JavaScript语言新发展
    ],
    // 微信小程序
    '/pages/note/wechat-applet/': [
        '',
        wechatAppletNoteNoteConfig, // 微信小程序
    ],
    // 大话NodeJS72般变化-基础准备
    '/pages/note/talk-node/talk-node-ready/': [
        '',
        nodeBaseApiConfig, //  NodeJS基础API
        nodeExpressConfig, // express入门必看
        nodeKoa1Config, // KOA1入门必看
        nodeKoa2Config, // KOA2入门必看
        nodeWorkConfig, // Node实战小项目
    ],
    // 大话NodeJS72般变化-笔记
    '/pages/note/talk-node/talk-node-note/': [
        '',
        talkNodeNoteConfig // 大话NodeJS72般变化
    ],
    // 前端工程化-基础准备
    '/pages/note/front-engineering/front-engineering-ready/': [
        '',
        frontBuildingToolsConfig, // 常用前端构建工具入门
    ],
    // 前端工程化-笔记
    '/pages/note/front-engineering/front-engineering-note/': [
        '',
        frontEngineeringNoteConfig // 前端工程化
    ],
    // 前端性能优化与工程化-基础准备
    '/pages/note/front-performance/front-performance-ready/': [
        '',
        frontTechnicalOptimizationConfig, // 性能优化常用技术手段
        frontSeniorDebugConfig, // 前端工程师高级调试
    ],
    // 前端性能优化与工程化-笔记
    '/pages/note/front-performance/front-performance-note/': [
        '',
        frontPerformanceNoteConfig, // 前端性能优化与工程化
    ],
    // CSS古话今说与网站重构-基础准备
    '/pages/note/css-advanced/css-advanced-ready/': [
        '',
        cssPretreatmentConfig, // Less&Sass入门
        cssCoreSkillConfig, // CSS3其他核心技巧
    ],
    // CSS古话今说与网站重构-笔记
    '/pages/note/css-advanced/css-advanced-note/': [
        '',
        cssAdvancedNoteConfig, // CSS古话今说与网站重构
    ],
    // MVC、MVVM框架那些事-基础准备
    '/pages/note/front-frame/front-frame-ready/': [
        '',
        frontTsIntroConfig, // Typescript入门
        frontVueIntroConfig, // vue入门必学
        frontAngularIntroConfig, // AngularJS入门必学
        frontReactIntroConfig, // React入门必学
    ],
    // MVC、MVVM框架那些事-笔记
    '/pages/note/front-frame/front-frame-note/': [
        '',
        frontFrameNoteConfig, // MVC、MVVM框架那些事
    ],
    // flutter
    '/pages/note/flutter/': [
        '',
        flutterNoteNoteConfig, // flutter
    ],
    // uniapp
    '/pages/note/uniapp/': [
        '',
        uniappNoteNoteConfig, // uniapp
    ],
    // 前端跨界AI、IOS、PC、Android、IOT-基础准备
    '/pages/note/front-crossover/front-crossover-ready/': [
        '',
        frontMobileBuildConfig, // Android&iOS开发环境搭建
        frontRncoIntroConfig, // ReactNative&Cordova入门
        frontEmbedIntroConfig, // 前端跨界PC与嵌入式
        frontPythonIntroConfig, // 走进Python的世界
    ],
    // 前端跨界AI、IOS、PC、Android、IOT-笔记
    '/pages/note/front-crossover/front-crossover-note/': [
        '',
        frontCrossoverNoteConfig, // 前端跨界AI、IOS、PC、Android、IOT
    ],
    // python
    '/pages/note/python/': [
        '',
        pythonNoteNoteConfig, // python
    ],
    // 数据结构与算法JavaScript实践-基础准备
    '/pages/note/data-structure/data-structure-ready/': [
        '',
        structureJsTopConfig, // 数据结构和算法JavaScript实践【上】
        structureJsMidConfig, // 数据结构和算法JavaScript实践【中】
        structureJsBotConfig, // 数据结构和算法JavaScript实践【下】
        structureThoroughConfig, // 数据结构和算法深入提升
    ],
    // 数据结构与算法JavaScript实践-笔记
    '/pages/note/data-structure/data-structure-note/': [
        '',
        dataStructureNoteConfig, // 数据结构与算法JavaScript实践
    ],
    // JavaScript图形学和H5游戏-基础准备
    '/pages/note/front-graphics/front-graphics-ready/': [
        '',
        graphicsCanvasConfig, // Canvas入门
        graphicsCocos2dTopConfig, // Cocos2d-JS快速入门【上】
        graphicsCocos2dBotConfig, // Cocos2d-JS快速入门【下】
        graphicsWebglTopConfig, // WebGL深入浅出【上】
        graphicsWebglMidConfig, // WebGL深入浅出【中】
        graphicsWebglBotConfig, // WebGL深入浅出【下】
        graphicsThreeTopConfig, // Three.js系列课程【上】
        graphicsThreeMidConfig, // Three.js系列课程【中】
        graphicsThreeBotConfig, // Three.js系列课程【下】
    ],
    // JavaScript图形学和H5游戏-笔记
    '/pages/note/front-graphics/front-graphics-note/': [
        '',
        frontGraphicsNoteConfig, // JavaScript图形学和H5游戏
    ],
    // 设计模式与网络安全专场-基础准备
    '/pages/note/front-hacker/front-hacker-ready/': [
        '',
        designPatternTopConfig, // 常用设计模式【上】
        designPatternBotConfig, // 常用设计模式【下】
    ],
    // 设计模式与网络安全专场-笔记
    '/pages/note/front-hacker/front-hacker-note/': [
        '',
        frontHackerNoteConfig, // 设计模式与网络安全专场
    ],
}