/** 知识积累 **/
/**
 * 面试题
 * interview-base 基础面试题
 * interview-one-side 一面训练
 * interview-write 手写代码集锦
 * interview-vue vue面试题
 * interview-react react面试题
 * interview-webpack webpack面试题
 * interview-calc 算法面试题
 * interview-ready 面试前准备
 * interview-experience 面试经历2022开始
 */
const interviewBaseConfig = require("./interview/interview-base");
const interviewOneSideConfig = require("./interview/interview-one-side");
const interviewWriteConfig = require("./interview/interview-write");
const interviewVueConfig = require("./interview/interview-vue");
const interviewReactConfig = require("./interview/interview-react");
const interviewWebpackConfig = require("./interview/interview-webpack");
const interviewCalcConfig = require("./interview/interview-calc");
const interviewReaady = require("./interview/interview-ready");
const interviewExperienceConfig = require("./interview/interview-experience");

/**
 * front 前端
 *  js-note js笔记
 *  vue-note vue笔记
 *  vue3-vite-note
 *  react-note react笔记
 *  koa-uniapp-note koa+nuiapp笔记
 *  flutter-note flutter笔记
 *  node-note node笔记
 *  ts-note ts笔记
 *  node-ts-note node+ts笔记
 *  vue-ts-note vue+ts笔记
 *  webpack-note webpack笔记
 *  gis-note gis笔记
 *  cesium-note gis笔记
 *  css-note css笔记
 *  other-note 其他
 */
const jsNoteConfig = require("./front/js-note");
const vueNoteConfig = require("./front/vue-note");
const vue3ViteNoteConfig = require("./front/vue3-vite-note");
const reactNoteConfig = require("./front/react-note");
const koaUniNote = require("./front/koa-uniapp-note");
const flutterNoteConfig = require("./front/flutter-note");
const nodeNoteConfig = require("./front/node-note");
const tsNoteConfig = require("./front/ts-note");
const nodeTsNoteConfig = require("./front/node-ts-note");
const vueTsNoteConfig = require("./front/vue-ts-note");
const webpackNoteConfig = require("./front/webpack-note");
const gisNoteConfig = require("./front/gis-note");
const cesiumNoteConfig = require("./front/cesium-note");
const cssNoteConfig = require("./front/css-note");
const otherNoteConfig = require("./front/other-note");

/**
 * back 后端
 *  linux-note  linux笔记
 *  mysql-note  数据库
 *  java-note  java笔记
 *  java-base  java基础
 *  java-frame  java框架
 */
const linuxNoteConfig = require("./back/linux-note");
const mysqlNoteConfig = require("./back/mysql-note");
const javaNoteConfig = require("./back/java-note");
const javaBaseConfig = require("./back/java-base");
const javaFrameConfig = require("./back/java-frame");
/**
 * basetool 基础工具
 *  elk-note  elk笔记
 *  other-note  其他笔记
 */
const elkNoteConfig = require("./basetool/elk-note");
const _otherNoteConfig = require("./basetool/other-note");

/**
 * basetool 博客搭建
 *  create-base  博客搭建
 */
const createBlog = require('./createblog/create-base');

module.exports = {
    // 面试
    '/pages/accumulation/interview/': [
        '',
        interviewBaseConfig, // 基础面试题
        interviewOneSideConfig, // 一面训练
        interviewWriteConfig, // 手写代码集锦
        interviewVueConfig, // vue面试题
        interviewReactConfig, // react面试题
        interviewWebpackConfig, // weboack面试题
        interviewCalcConfig, // 算法面试题
        interviewReaady, // 面试前准备
        interviewExperienceConfig, // 面试经历
    ],
    // 前端
    '/pages/accumulation/front/': [
        '',
        jsNoteConfig, // js笔记
        vueNoteConfig, // vue笔记
        vue3ViteNoteConfig, // vue3笔记
        reactNoteConfig, // react笔记
        koaUniNote, // koa+nuiapp笔记
        flutterNoteConfig, // flutter笔记
        nodeNoteConfig, // node笔记
        tsNoteConfig, // ts笔记
        nodeTsNoteConfig, // node+ts笔记
        vueTsNoteConfig, // vue+ts笔记
        webpackNoteConfig, // webpack笔记
        gisNoteConfig, // gis笔记
        cesiumNoteConfig, // cesium笔记
        cssNoteConfig, // css笔记
        otherNoteConfig, // 其他笔记
    ],
    // 后端
    '/pages/accumulation/back/': [
        '',
        linuxNoteConfig, // linux笔记
        mysqlNoteConfig, // mysql 数据库
        javaNoteConfig, // java笔记
        javaBaseConfig, /// java基础
        javaFrameConfig // java框架
    ],
    // 基础工具
    '/pages/accumulation/basetool/': [
        '',
        elkNoteConfig,
        _otherNoteConfig
    ],
    // 博客搭建
    '/pages/accumulation/createblog/': [
        '',
        createBlog
    ],
}