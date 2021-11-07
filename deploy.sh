#!/usr/bin/env sh
###
 # @Author: jiangnan
 # @Email: hujiangnan@hatech.com.cn
 # @Date: 2021-11-07 00:03:18
 # @LastEditors: jiangnan
 # @LastEditTime: 2021-11-07 15:47:21
 # @Describle: 描述
### 

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

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f https://github.com/freshhu/blog.git master:gh-pages

cd -
