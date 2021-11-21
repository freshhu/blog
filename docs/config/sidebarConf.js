/**
 * config
 */
//基础知识
const basics = require('../config/sidebarManage/basics/index')

// 三大框架
const frame = require('../config/sidebarManage/frame/index')


// 算法
const algorithm = require('../config/sidebarManage/algorithm/index')
    // 知识积累
const accumulation = require('../config/sidebarManage/accumulation/index')
    // 学习笔记
const note = require('../config/sidebarManage/note/index')

module.exports = {
    // 基础知识
    ...basics,
    // 三大框架
    ...frame,
    // 算法
    ...algorithm,
    // 知识积累
    ...accumulation,
    // 学习笔记
    ...note
};