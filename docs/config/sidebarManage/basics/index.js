/** 基础知识 **/
/**
 * javascript基础
 * javascript-base 基础知识
 */
const javascriptBaseConfig = require("./javascript/javascript-base");
/**
 * typescript基础
 * typescript-base 基础知识
 */
const typescriptBaseConfig = require("./typescript/typescript-base");
module.exports = {
    '/pages/basics/javascript/': [
        javascriptBaseConfig // 
    ],
    '/pages/basics/typescript/': [
        typescriptBaseConfig, // typescript-base 基础知识
    ]
}