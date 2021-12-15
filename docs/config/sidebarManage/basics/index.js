/*
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2021-11-15 14:22:21
 * @LastEditors: jiangnan
 * @LastEditTime: 2021-12-15 22:45:29
 * @Describle: 描述
 */
/** 基础知识 **/
/**
 * javascript基础
 * javascript-base 基础知识
 * javascript-advanced javascript高级
 */
const javascriptBaseConfig = require("./javascript/javascript-base");
const javascriptAdvancedConfig = require("./javascript/javascript-advanced");
/**
 * typescript基础
 * typescript-base 基础知识
 * typescript-advanced 常见知识及问题汇总
 */
const typescriptBaseConfig = require("./typescript/typescript-base");
const typescriptAdvancedConfig = require("./typescript/typescript-advanced");
module.exports = {
    '/pages/basics/javascript/': [
        javascriptBaseConfig,
        javascriptAdvancedConfig
    ],
    '/pages/basics/typescript/': [
        typescriptBaseConfig, // typescript-base 基础知识
        typescriptAdvancedConfig // typescript-advanced 常见知识及问题汇总
    ]
}