/** 算法  **/

/**
 * leet-code
 *   algorithm-easy 算法天堂模式
 *   algorithm-hard 算法地狱模式 
 *   algorithm-normal 算法人间模式 
 *   algorithm-muke 慕课网学习算法笔记
 */
const algorithmEasyConfig = require("./leet-code/algorithm-easy");
const algorithmHardlConfig = require("./leet-code/algorithm-hard");
const algorithmNormalConfig = require("./leet-code/algorithm-normal");
const algorithmMukeConfig = require("./leet-code/algorithm-muke");
/**
 * other
 *   algorithm-base 基础算法
 */
const algorithmBaseConfig = require("./other/algorithm-base");



module.exports = {
    '/pages/algorithm/leet-code/': [
        '',
        algorithmEasyConfig, // 算法天堂模式
        algorithmNormalConfig, // 算法人间模式
        algorithmHardlConfig, // 算法地狱模式
        algorithmMukeConfig, // 慕课网学习
    ],
    '/pages/algorithm/other/': [
        '',
        algorithmBaseConfig, // 基础算法
    ],
}