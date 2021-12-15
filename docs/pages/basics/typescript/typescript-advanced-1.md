
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
 
### 5.1枚举带来的好处:

  1. 有默认值和可以自增值,节省编码时间

  2. 语义更清晰,可读性增强,

  因为枚举是一种值类型的数据类型,方法参数可以明确参数类型为枚举类型

### 5.2枚举的应用
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