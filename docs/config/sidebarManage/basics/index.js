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
 */
const typescriptBaseConfig = require("./typescript/typescript-base");
module.exports = {
    '/pages/basics/javascript/': [
        javascriptBaseConfig,
        javascriptAdvancedConfig
    ],
    '/pages/basics/typescript/': [
        typescriptBaseConfig, // typescript-base 基础知识
    ]
}