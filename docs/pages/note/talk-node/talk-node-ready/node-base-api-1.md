# 走进Node.js  
 

## 一、基本环境的创建

### 1、创建项目

```bash
# 1、初始化项目
npm init -y
# 2、全局安装typescript
npm install -g typescript
# 3、展示typescript配置文件
tsc --init
# 4、安装 ts-node 方便执行ts文件
npm install -g ts-node
# 5、可以用ts-node执行ts文件
ts-node api_server.ts

```

### 2、文件目录

```bash
 ├── api_server.ts #服务文件
 ├──data.ts #专门处理数据
 ├── list.json 
 ├── package.js 
 ├── tsconfig.json # ts的配置文件 
```

### 3、node的API学习

1.安装express

```bash
npm install express -S

# 安装类型申明依赖
npm install @types/express -D
```

2.编写代码

```typescript
// 需求：希望有一个服务，可以依据请求的接口内容返回相应的数据
// api_server.ts
/**
* 1.此处没有使用require引入依赖，是因为在ts中不被支持，可以使用esmodule的引入方式
* 2.express会报红，是因为express包是用js语法写的，而当前为ts编辑环境，所以它里面的数据类型是不被支持的，因此需要对他进行声明。安装依赖 npm install @types/express -D
*/ 
import express from 'express' 
import { DataStore } from './data'

const app = express();
app.get('/',(req,res)=>{
     res.json(DataStore.list)
})
app.listen(8080,()=>{
    console.log('服务已经开启了')
})
```

list.json文件编写

```json
// list.json
[
    {
        'name':'zce',
        'age':38
    },
    {
        'name':'syy',
        'age':18
    }
]
```

data.ts文件编写

```typescript
/**
* 1.导入json时，则会报错，是由于ts不支持导入json后缀的文件的。如果需要支持，则可以在tsconfig.json文件中配置resolveJsonModule为true
*/
import list from './list.json';
export class DataStore{
   static list = list   
}
```























<ClientOnly>
  <Valine></Valine>
</ClientOnly>
