
# typescript常见问题

## 1、看似简单的取值，为何报错？
```typescript

/* 现在需要通过外部变量传的key进行取obj中值 */ 

let obj1 = { username: "wangwu", age: 23 }
// 正常 obj['username'] 这样可以取值

// 如果通过变量的形式取值 ，这种方式就会报错：因为变量username不固定还可以为其他值
// let username = 'username'
// obj[username]

// 上述问题解决办法如下：
 const username = "username"
 obj1[username]


/* 当定义obj2为对象类型时，用上面方式也还是会报错*/
let obj2: object = { username: "wangwu", age: 23 }

// 如下方式一样会报错
// const username = "username"
//  obj2[username]

// 解决上面报错，则可以用类型的断言方式写：
let result = (obj2 as any)[username]

```

## 2、any和 unknown的两个区别？
```typescript
/* 区别一 */

// let price:any = 12312
// let total:number = price
let price:any = 'fsdfds'
let total:number = price
// 上述两种写法，均不会出错，说明：any类型既可以做任何类型的父类，又可以作为任何类型的子类

let stuName:unknown = 'wangwu' // unknown类型的变量也可以赋值数字、boolean、数组等其他类型
// let stuAge:number = stuName  // 此时会报错
// 说明：unknown只能作为任何类型的父类，不能做任何类型的子类


/* 区别二 */
let stuObj:any = {username:'zhangsan',age:23}
// stuObj. 点的时候则没有任何属性提示，但是stuObj.username  或者stuObj.phone都不会报错
//说明： any 可以强制写存在和不存在的属性

let stuObj2:unknown = {username:'zhangsan',age:23}
// 此时stuObj2.username则会直接报错 点不存在的属性也会报错

```
## 3、String和 string的区别？
```typescript

// String 是JS中遗留的类型  单纯的 String. 就会出现一些静态方法和属性提示，而 string. 则不会有一些方法或者属性提示。
// string 是String的类型表现方式。

let name:string = 'zhangsan'
let name:String = 'zhangsan'
// 上面两个写法的结果都是一样的
```
## 4、什么场景never能被直接推导出来而不用定义？
```typescript
// dataFlowAnalysisWithNever 方法穷尽了 DataFlow 的所有可能类型。 
// 使用 never 避免出现未来扩展新的类没有对应类型的实现, 目的就是写出类型绝对安全的代码。
type DataFlow = string | number
function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
 
  if (typeof dataFlow === "string") {
    console.log("字符串类型:", dataFlow.length);
  } else if (typeof dataFlow === "number") {
    console.log("数值类型:", dataFlow.toFixed(2));
  }else{
    // 此时这个地方的data就会呈现出为 never类型
    let data=dataFlow
  }
}
dataFlowAnalysisWithNever("免税店")
dataFlowAnalysisWithNever(3.199923)


```

## 5、枚举的好处及应用
 
 ``5.1枚举带来的好处:``

  1. 有默认值和可以自增值,节省编码时间

  2. 语义更清晰,可读性增强,

  因为枚举是一种值类型的数据类型,方法参数可以明确参数类型为枚举类型

 ``5.2枚举的应用``
  ```typescript
  export enum EnumAuditStatus {
    MANAGER_ADUIT_FAIL = -1,//第一个常量值设置为-1
    NO_ADUIT, // 第二个常量值自动递增1 就为0
    MANAGER_ADUIT_SUCCESS,// // // 第二个常量值自动递增2 就为1
    FINAL_ADUIT_SUCCESS // // // 第二个常量值自动递增3 就为2
  }


  interface Expense {
    id: number,
    events: string,
    time: Date,
    enumAuditStatus: EnumAuditStatus
  }

  class ExpenseService {
    addExpense(expense: Expense) { }
  }
  let expenseService = new ExpenseService();

  // 审核类
  class MyAduit {
    getAduitStatus(status: EnumAuditStatus): void {
      let mystatus: EnumAuditStatus = 10;//定义枚举类型的变量
      let mystatus2: EnumAuditStatus = mystatus;
      mystatus2 = mystatus2 + 1;
      console.log("mystatus:", mystatus);//10
      console.log("mystatus2", mystatus2);//11

      if (status === EnumAuditStatus.NO_ADUIT) {//NO_ADUIT=0
        console.log("没有审核");
      } else if (status === EnumAuditStatus.MANAGER_ADUIT_SUCCESS) {
        console.log("经理审核通过");
        let expense: Expense = {
          id: 1,
          events: "飞机票报销",
          time: new Date(),
          enumAuditStatus: status
        }
        expenseService.addExpense(expense)
      } else if (status === EnumAuditStatus.FINAL_ADUIT_SUCCESS) {
        console.log("财务审核通过");
      } else {
        console.log("审核失败");
      }
    }
  }

  const aduit = new MyAduit();
  aduit.getAduitStatus(EnumAuditStatus.FINAL_ADUIT_SUCCESS);
  export { }
```

## 6、type 和 interface 区别

 **区别1： 定义类型范围不同**
- interface 只能定义对象类型或接口当名字的函数类型。

- type 可以定义任何类型，包括基础类型、联合类型 ，交叉类型，元组。

```typescript
// type 定义基础类型
type num=number 

//  type 定义联合类型例子1：
type baseType=string |number | symbol

//  type 定义联合类型例子2：
interface Car { brandNo: string}
interface Plane { No: string; brandNo: string}
type TypVechile = Car| Plane 

//  元组
interface Car { brandNo: string}
interface Plane { No: string; brandNo: string}
type TypVechile = [Car, Plane]
```

**区别2 ：接口可以extends 一个或者多个 接口或类， 也可以继承type，但type 类型没有继承功能。（但一般 接口继承 类 和 type 的应用场景很少见）**
```typescript
// 新的接口只是在原来接口继承之上增加了一些属性或方法，这时就用接口继承

// 例子1：
// 开始定义了一个接口
interface  Point{
    x:number;
    y:number;
}

// 需求发生了变化，但是是在原来 Point 接口的基础之上增加了一个新的 z:number 属性。
interface  Point3d extends Point{
    z:number;
}


// 例子2：Vue3源码中 稍复杂一点的接口继承
interface Error {
  name: string;
  message: string
}

interface CompilerError extends Error {
  code: number
}

const enum ErrorCodes {
  // parse errors
  ABRUPT_CLOSING_OF_EMPTY_COMMENT,
  CDATA_IN_HTML_CONTENT,
  DUPLICATE_ATTRIBUTE,
  END_TAG_WITH_ATTRIBUTES,
  END_TAG_WITH_TRAILING_SOLIDUS,
  EOF_BEFORE_TAG_NAME,
  EOF_IN_CDATA,
  EOF_IN_COMMENT,
  EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT,
  EOF_IN_TAG,
  INCORRECTLY_CLOSED_COMMENT
   ......
}
 
 interface CoreCompilerError extends CompilerError {
  code: ErrorCodes
}

//  其他应用比较少的场景:
//  1 接口也可以继承多个接口  2 接口可以继承类  3 类可以继承一个或多个接口

```

**区别3：用 type 交叉类型 & 可让类型中的成员合并成一个新的 type 类型，但接口不能交叉合并**
```typescript

type Group = { groupName: string, memberNum: number }
type GroupInfoLog = { info: string, happen: string }
type GroupMemeber = Group & GroupInfoLog// type 交叉类型合并

let data: GroupMemeber = {
  groupName: "001", memberNum: 10,
  info: "集体爬山", happen: "中途有组员差点滑落,有惊无险",
}

export { }
```

**区别4：接口可以合并声明**

定义两个相同名称的接口会合并声明，定义两个同名的type会出现编译错误。

```typescript
interface Error {
  name: string;
}

interface Error {
  message: string;
  stack?: string;
}
// 接口合并
let error: Error = {
  message: "空指针",
  name: "NullPointException"
}
```

## 7、一种用接口定义的特殊写法的类型
```typescript
// 接口当名字的函数类型

interface ActionContext = {
  (state:any,commit:any):void
}

let actionContext:ActionContext = (state:any,commit:any):void =>{
  console.log("state :",state);
}
actionContext('abc','df')
```

## 8、一个联合类型技巧性使用的场景
```typescript

// function mounted(isStartUp:boolean){

// }
// mouted(true) // 只能传 true 和false  如果想传0 或者 1 则如下：
type IncreaseBoolean = Boolean | 1 | 0
function mounted(isStartUp:IncreaseBoolean){
    if(isStartUp){
      console.log('yes')
    }else{
      console.log('no')
    }
}
mouted(true)

```
## 9、为什么要用声明文件？
- 如果文件使用 TS 编写，在编译时可以自动生成声明文件，并在发布的时候将 .d.ts  文件一起发布，我们无需编写声明文件。

- 当我们在 TS 文件中引入使用第三方库的类型或使用 集成库 时，比如：@types/jquery  库，ES6 库的 Map 类型 ，这些库用 JS 开发，不能获取 TS 一样的 类型提示，需要一个声明文件来帮助库的使用者来获取库的类型提示。

**注意：声明文件中只对类型定义，不能进行 赋值 和 实现。**

1. js 文件 如何感知声明文件的作用  

2. 学会定义和使用声明文件  

```typescript
// tsconfig.json 中打开  "declaration": true, 则使用tsc编译时会自动生成.d.ts文件
// 关键字 declare 表示声明的意思,我们可以用它来做出各种声明:

declare let/const  // 声明全局变量
declare function   // 声明全局方法
declare class      // 声明全局类
declare enum       // 声明全局枚举类型 
declare namespace  // 声明（含有子属性的）全局对象
interface/type     // 声明全局类型,前面不需要加declare
```
```typescript
// 声明文件实现的例子，比如jq
// 声明文件在哪儿可以使用呢？ 可以在配置的include中匹配的文件目录下使用。不需要导入。

/**创建文件命名为 jq.d.ts 内容如下：**/

declare function $(ready:()=>void):void

// 定义了一个对象，里面有css， 返回的仍旧是cssSelector，则可以实现jq设置多个属性（级联的效果）
declare type cssSelector = {
  css:(key:string,value:string) => cssSelector
}
// 函数返回的是cssSelector对象类型
declare function $(selector:any):cssSelector

/**对应的ts文件  命名为index.ts 文件**/
$(function(){

})
$('div').css('border','1px solid red').css('marginTop','20px')

```
## 10、命名空间在声明文件中的使用(以及嵌套的命名空间)
主要是为了防止重名，虽然申明文件可以申明相同的名字，但是比较杂乱。
```typescript
// 创建文件 命名为：demo.d.ts
declare namespace JQuery{
  // 声明的命名空间，内部就不需要用关键字 declare声明其他的了，但可以使用export导出
  type cssSelector = {
    css:(key:string,value:string) => cssSelector
  }
  export function $(ready:()=>void):void
  export function $(selector:any):cssSelector
  // 嵌套的命名空间
  export namespace ${
    function ajax(url:string,settins?:string):void
    function get(url:string,settins?:string):void
    function post(url:string,settins?:string):void
  }
}

// 创建文件 命名为：index.ts
JQuery.$(function(){

})
JQuery.$('div').css('border','1px solid red').css('marginTop','20px')

JQuery.$.ajax('http://localhost:5000/api/xxx/xxx')
```

## 11、模块声明
相比命名空间，模块声明更好，如下示例：
```typescript
// 创建文件 命名为 demo.d.ts 内容如下：
declare module 'JQueryModule'{
  type cssSelector = {
    css:(key:string,value:string) => cssSelector
  }
  function $(ready:()=>void):void
  function $(selector:any):cssSelector
  // 嵌套的命名空间
  namespace ${
    function ajax(url:string,settins?:string):void
    function get(url:string,settins?:string):void
    function post(url:string,settins?:string):void
  }

  // export default $  // commonjs
  export = $ // 此写法兼容amd commonjs两种规范
}

// 创建文件 命名为：index.ts
import $ from 'JQueryModule'
$(function(){

})
$('div').css('border','1px solid red').css('marginTop','20px')

```

## 12、如何在TS中引入js文件？

主要是在tsconfig.json中设置"allowJs"为true 即可：
```typescript
// 创建文件 命名为 product.js 写入内容：
export let price = 3

// 创建文件 命名为 demo.ts  引入js则如下：
import {price} from './product.js'
console.log('price->',price)

```
