# TypeScript

## 一、TypeScript 是什么

[TypeScript](https://www.typescriptlang.org/) 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。下图显示了 TypeScript 与 ES5、ES2015 和 ES2016 之间的关系：

![base-one1](/blog/images/basics/ts/base-one1.png)

### 1.1 TypeScript 与 JavaScript 的区别

![base-one2](/blog/images/basics/ts/base-one2.png)

### 1.2 TypeScript的优势

- 开发过程中，发现潜在问题。（编译器会提示报错）
- 更友好的编辑器自动提示。（比如传一个对象，编译器会知道该对象的数据结构）
- 代码语义更清晰易懂。（比如函数传参，通过类型的定义，便清楚知道要传参的数据结构）
- TypeScript提供最新的和不断发展的JavaScript特性

### 1.3获取 TypeScript

​	命令行的 TypeScript 编译器可以使用 Node.js 包来安装。

1. 安装 TypeScript

   ```bash
   npm install -g typescript
   ```

2. 初始化项目

   ```bash
   # 1、创建项目
   npm init -y
   # 2、展示配置文件
   tsc --init
   ```
   
   
   
3. 编译 TypeScript 文件

   ```bash
    # helloworld.ts => helloworld.js (不会经过配置文件，可以写配置 tsc --outDir outjs --target es5 --module commonjs helloworld.ts )
   tsc helloworld.ts  

   # 监听ts文件变化，自动生成对应的ts (经过配置文件)
   tsc -w

   # 将全局ts文件编译为js (经过配置文件)
   tsc
   ```

4. 快捷编译TypeScript文件，则可以安装 ts-node

   ```bash
   npm install -g ts-node
   # 不用先编译成js，直接打印ts文件中的结果
   ts-node helloworld.ts 
   ```

   

## **二、TypeScript 数据类型**

​		为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。

1. JS里面有七种数据类型。Number，String，Boolean, Null, Undefined, Symbol, Object
2.  TS中的常用的数据类型有：
    - 基础类型：Number、String、Boolean、Symbol、BigInt、Null、Undefined、void、any、元组、枚举。
    - 对象类型：对象、数组、类、函数

### 2.1Number 类型

​		和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 `number`。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

```javascript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

### 2.2 String 类型

​		JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 `string`表示文本数据类型。 和JavaScript一样，可以使用双引号（ `"`）或单引号（`'`）表示字符串。

```javascript
let name: string = "Semliker";
// ES5：var name = 'Semlinker';
```

### 2.3 Boolean 类型

​		最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做`boolean`（其它语言中也一样）

```javascript
let isDone: boolean = false;
// ES5：var isDone = false;
```

### 2.4Array类型

​		TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```javascript
let list: number[] = [1, 2, 3];
// ES5：var list = [1,2,3];
```

​		第二种方式是使用数组泛型，`Array<元素类型>`：

```javascript
let list: Array<number> = [1, 2, 3];
// ES5：var list = [1,2,3];
```

1、数组中既有数字又有字符串

```typescript
let arr: (number | string)[] = [1,'2',3]
```

2、类型别名的写法

```typescript
// type alias 类型别名
type User = {name:string, age:number};
const objectArr:User[] = {
    name: 'dell',
    age:28
}
```



### 2.5Tuple 类型

​		元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 `string`和`number`类型的元组。

```javascript
// 声明一个元组类型
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error


// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'


// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
```

### 2.6Enum 类型

​		`enum`类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```javascript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

```javascript
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

```javascript
// 全部都采用手动赋值：
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

```javascript
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

### 2.7Any 类型

​		在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）。
1. `any`类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查
2. Any类型 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型，如用户输入或者`ajax`或者第三方库；这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量

3. 使用场景是， 当我们需要把公司现有的`javascript`项目迁移到typescript上面来的时候，就可以给变量声明any类型，后面再逐个的去优化，能让我们的老项目迅速切换到`typescirpt`
```javascript
let notSure: any = 666;
notSure = "Semlinker";
notSure = false;
```

​		当你只知道一部分数据的类型时，`any`类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```javascript
let list: any[] = [1, true, "free"];
list[1] = 100;
```

### 2.8 Void 类型

​		某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```javascript
function warnUser(): void {
    console.log("This is my warning message");
}
```

​		声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：

```javascript
let unusable: void = undefined;
```

### 2.9Null 和 Undefined

​		TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大：

```javascript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

​		默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。

​		然而，当你指定了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自。 这能避免 *很多*常见的问题。 也许在某处你想传入一个 `string`或`null`或`undefined`，你可以使用联合类型`string | null | undefined`。

​		注意：我们鼓励尽可能地使用`--strictNullChecks`，但在本手册里我们假设这个标记是关闭的。

### 2.10  Never 类型

​		`never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

​		`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

下面是一些返回`never`类型的函数：

```javascript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

### 2.11 Object

​		`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如：

```javascript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

## 三、TS高级类型

### 3.1 类型注释

类型注解, 我们来告诉 TypeScript变量是什么类型

```typescript
// 分两行写，则无法推论出count是number类型，需要注释
let count: number;
count = 123;
// let count = 123 可以不用注释，则就会推论为number类型
```
### 3.2联合类型
1. 表示取值可以为多种类型中的一种， 使用竖线（|）分割每个类型

   ```typescript
   let myNumber: string | number;
   myNumber = 'nine';
   myNumber = 9;
   
   console.log(myNumber);
   myNumber = true;
   // 这里允许myNumber的数据类型是 string和number， 不能是其他类型; 如果赋值为boolean则会报编译错误
   ```

2. 联合类型的属性或方法,只能访问它的所有类型里共有的属性或方法

   ```typescript
   function getParam(argc: number | string) {
     // console.log(argc.toFixed());
     console.log(argc.toString());
   }
   getParam(1);
   ```
3.  补充  联合类型相当于由类型构成的枚举类型
### 3.3类型推论

类型推论, TS 会自动的去尝试分析变量的类型

```typescript
// 如果TS能够自动分析变量类型，我们就什么也不需要做了
let countInference = 123

// 如果 TS无法分析变量类型，我们就需要使用类型注解
function getTotal(firstNumber:number,secondNumber:number){ // 需要加。如果不加时鼠标移到firstNumber和secondNumber，会显示any
    return firstNumber+secondNumber
}
const total = getTotal(1,2); // 此时total便可以推断出为number类型，就不用加类型注解。
```

### 3.4类型断言

​		有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

​		通过*类型断言*这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式：

#### 3.4.1 尖括号 语法

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

#### 3.4.2`as`语法：

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

​		两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 `as`语法断言是被允许的。

### 3.5类型别名
1. 类型别名用来给一个类型起个新名字

2. 起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型； 一般给原始类型起别名没什么用

3. 工作里面尽量使用后面我们会学习的接口 来代替类型别名

 ```typescript
// 语法结构是 type + 自定义变量名  然后再赋值一个已存在的类型
type Name = string;
type NameNS = string | number;

let goodsName: Name = 'iphone';
let goodsName1: NameNS = 12;
 ```
### 3.6字符串字面量类型
1. 字符串string字面量类型  用来约束取值只能是某几个字符串中的一个

2. 字符串字面量类型与类型别名都是使用 type 进行定义

3. TypeScript 同样也提供 boolean 和 number 的字面量类型

```typescript
type MoveDirection = 'up' | 'down' | 'left' | 'rigth';
function move(direction: MoveDirection) {
    console.log(`向：${direction} 方向移动`);
}
   
move('up');
move('下');

TypeScript 同样也提供 boolean 和 number 的字面量类型：例如
type oneToThree = 1 | 2 | 3;
type myBool = true | false;

let myNum = 3;
let myboo = false;
console.log(myNum, myboo);
```

   

## 四、函数

### 	4.1 函数定义的两种方式，以及函数类型

1. 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要给函数的参数和返回值都设置一个类型

2. 函数有个特点：函数内部可以使用函数体外部的变量

3. `TypeScript` 的函数类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。 在 ES6 中，=> 叫做箭头函数

4. 后面我们会用接口来定义函数的形状，避免我们在函数的定义哪里写的代码过于臃肿，让代码结构更清晰

​		1、为函数定义类型

```typescript
// 函数声明
function add(x, y) {
  return x + y;
}
// 函数表达式
let add1 = function add1(x, y) {
  return x + y;
};
// 我们之前说过，任何的js代码都可以不改代码的情况下，直接将后缀名改为ts，可以正常的运行; 是因为ts的类型推断，会自动的根据我们传入的变量和返回的值进行判断
// 我们使用ts的形式来定义两个函数
function add(x: number, y: number): number {
  return x + y;
}
let add2 = function(x: number, y: number): number {
  return x + y;
};
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number { return x + y; };
// 一般在写项目时，不会省略返回值类型，因为以下情况不会报错
function add2(x:number,y:number){
    return x+y+''
}
let total = add2(1,2) // 此时total推断还是number类型而不是string，编译器也不会提示报错。
```

```typescript
// 函数没有返回值，则注释为void
function sayHello():void{
    console.log('hello')
    // return 'adasd' 会报错
}

// 函数的注释为never,函数不可能执行完成
function errorEmitter():never{
    throw new Error();
}
function errorEmitter2():never{
    while(true){}
}

```

​		2、函数解构的类型注释

```typescript
function add({first,second}:{first:number,second:number}):number{
    return first+second
}
let total = add({first:1,second:2})
```

​		3、书写完整函数类型

```typescript
// 方式1
const func = (str:string):number => {
    return parseInt(str,10)
} 
```

​		函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：

```typescript
// 方式2
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。 在 ES6 中，=> 叫做箭头函数
let add2: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
};

// 一般情况下，使用接口进行定义函数类型（后面会详讲），可以看定义的格式：
interface MyFn{
	(x:number,y:number):number;
}
let add3:MyFn = function(x: number, y: number): number {
  return x + y;
};
```

### 	4.2 可选参数和默认参数

1. `JavaScript`里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined

2. 在`TypeScript`里参数多了或者少了都是不被允许的；但是我们可以在参数名旁使用 ?实现可选参数的功能

3. 可选参数必须接在必需参数后面，也就是可选参数后面不允许再出现必需参数了

4. 在 ES6 中，我们允许给函数的参数添加默认值，`TypeScript `会将添加了默认值的参数识别为可选参数

```typescript
function fullName(firstName: string, lastName?: string) {
  console.log(lastName);
  return firstName + ' ' + lastName;
}
// 如果不加？, 这个函数我们就只能传递2个参数，多了少了编译都会失败；但是在js里面如果不传，返回值就是undefined
// 如果加上了?， 那这个函数第一个参数还是必传，第二个参数可传可不传
console.log(fullName('123', '456'));
console.log(fullName('123'));

// 可选参数必须接在必选参数后面； 下面这样定义函数就会编译报错
function buildName2(firstName?: string, lastName: string) {
  return firstName + ' ' + lastName;
}

// 接下来我们来看一下默认参数
function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat1 = buildName2('Tom', 'Cat');
let tom1 = buildName2('Tom');
// 第二次函数调用只传入了一个参数，因为我们ts会将添加了默认值的参数设置为可选参数， 即使不传递也可以，就是用的默认值Cat
```

### 4.3剩余参数

1. 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数
2. 想同时操作多个参数，或者你并不知道会有多少参数传递进来， 在`js`里面使用arguments来访问所有传入的参数
3. ` 在TypeScript`里，你可以把所有参数收集到一个变量里； 使用...扩展运算符

```typescript
function getBalls(x: string, ...restOfName: string[]) {
  console.log(restOfName);
  return x + ' ' + restOfName.join(' ');
}
// let myBalls = getBalls('basketball') 也可以
let myBalls = getBalls('basketball', 'football', 'tennis', 'baseball');
console.log(myBalls);
// 上面的代码中 restOfName实际上是一个数组。所以我们可以用数组的类型来定义它
// restOfName剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字
// 并且要注意 rest 参数只能是最后一个参数
```



### 4.4函数的重载

1. 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。 为同一个函数提供多个函数类型定义来进行函数重载

2. 同名函数的参数的个数、类型或者顺序必须不同 叫函数的重载

3. 在定义重载的时候，一定要把最精确的定义放在最前面。因为查找重载列表，会从第一个重载定义开始使用，如果匹配的话就是用，否则就继续向下查下;最后函数实现时，需要使用 |操作符或者?操作符，把所有可能的输入类型全部包含进去

4. 函数重载的意义在于能够让你知道传入不同的参数得到不同的结果，如果传入的参数不同，但是得到的结果（类型）却相同，那么这里就不需要使用函数重载

```typescript
function add(x: string | number, y: string | number): string | number {
  if  (typeof x === 'number' && typeof y === 'number') {
    return x + ;y
  } else if (typeof x === 'string' && typeof y === 'string'){
    return x + y;
  }
}

let v1 = add(1,2) // 鼠标放到v1 可以看到 类型为 string|number  所以不能给v1直接定为number类型的。《如果复杂的数据结构，无法点出来。》
let v2 = add('a','b')

// 解决上面的问题则用到函数重载
// 下面两个为函数的重载
function add(x: string, y: string): string;
function add(x: number, y: number): number;
// 下面这个为函数的实现
function add(x: string | number, y: string | number): string | number {
  if  (typeof x === 'number' && typeof y === 'number') {
    return x + ;y
  } else if (typeof x === 'string' && typeof y === 'string'){
    return x + y;
  }
}
let v3 = add(1,2) // 此时把鼠标放到v3 则可以显示为number类型。
```



## 五、类

​		传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

### 1.类定义

```typescript
// 我们首先通过传统的构造函数和原型对象的方法来看一下对象实例的创建
function Greeter(message) {
  this.msg = message;
}
Greeter.prototype.greeter = function() {
  return 'hello: ' + this.msg;
};

let m1 = new Greeter('传统方式创建对象实例');
console.log(m1.msg);
console.log(m1.greeter());

// 接下来我们再通过类class的方式 生成一个对象实例

class Greeter {
  //  我们在ES6的时候，实例属性都是定义在constructor()方法里面， 在ES7里 我们可以直接将这个属性定义在类的最顶层，其它都不变，去掉this;
  msg: string;
  flag: boolean = false;
  // 关于构造函数； constructor(构造函数)方法是类的默认方法
  // 一个类必须有constructor方法，如果没有显示定义，一个空的constructor方法会被默认添加
  constructor(message: string) {
    this.msg = message;
  }
  greeter() {
    console.log('这个是在构造函数外部定义实例属性：', this.flag);
    return 'hello: ' + this.msg;
  }
}

let g2 = new Greeter('通过类创建的对象实例'); // 没有加类型，则是因为类型推论，如果加类型则可以写成 let g2:Greeter = new Greeter('通过类创建的对象实例'); 说明Greeter可以当成类型来看
console.log(g2.msg);
console.log(g2.greeter());

// 接下来我们来分析一些，ES6新增的class语法糖，和构造函数的一些关系
console.log(typeof Greeter); // function 说明js和ts中没有类这个类型，只是传统的构造函数语法糖而已

// 类class的类型 本质上是一个函数; 类本身就指向自己的构造函数
// 通过在这个代码我们也可以发现，new类的时候就相当于new构造函数
console.log(Greeter === Greeter.prototype.constructor); // true

// 调用类上面的方法就是调用原型上的方法
// 在类的实例上面调用方法，其实就是调用原型上的方法
console.log(g2.greeter === Greeter.prototype.greeter); // true

```



### 2.继承

1. 使用继承来扩展现有的类，是面向对象的三大特性之一(封装，继承，多态)

2. 基类，父类，超类是指被继承的类，派生类，子类是指继承于基类的类

3. ts中类继承类似于传统面向对象编程语言中的继承体系 ，使用extends关键字继承，类中this表示此当前对象本身，super表父类对象。子类构造函数中第一行代码调用父类构造函数完成初始化，然后再进行子类的进一步初始化。子类中可以访问父类(public、protected)的成员属性、方法

4. 派生类包含了constructor; ts 规定只要派生类里面自定义了一个constructor函数就必须在使用this前，调用一下super方法

   1. ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）;ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this
   2. 因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象

   - 子类方法名和父类相同表示重写父类方法

```typescript
/* **业务需求，我们现在有两个类，一个动物类，一个狗类， 狗也是动物，所以会继承动物类的一些属性和方法 */
class Animal {
  name: string;
  constructor(param: string) {
    this.name = param;
  }
  move(distance: number = 0) {
    console.log(`${this.name} 移动了 ${distance}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('狗叫!');
  }
}

const dog = new Dog('阿黄');
console.log(dog.name);
dog.bark();
dog.move(10);
dog.bark();
// 上面这个例子中 动物类是基类，也可以父类；  狗是子类也可以叫派生类， 继承自动物类，可以使用父类的任何方法和属性

/* **我们将上面的代码稍微做一下修改:派生类包含了constructor */
class Dog extends Animal {
  dogName2: string;
  constructor(name: string) {
    // 派生类包含了一个构造函数，就必须首先调用super()方法，会调用基类的构造函数，然后构造子类自己的this
    super(name);
    this.dogName2 = name;
  }
  // 父类也有一个move方法，我们在子类例自定义move方法，就会重写从Animal继承来的move方法，从而使move方法根据不同的类而实现不同的功能
  move(distanceInMeters: number = 5) {
    console.log('重写了基类的move方法');
    super.move(distanceInMeters);
  }
  bark() {
    console.log('狗叫!');
  }
}
let animal1: Animal = new Animal('赤兔');
// 这个dog1即使被声明为 Animal类型，也不会调用父类的move方法，因为它的值就是Dog实例
let dog1: Dog = new Dog('阿黄');
animal1.move();
dog1.move(10);

```

### 3.静态方法和属性，Setter和Getter

1. ES6中提供了 静态方法， ES7中提供了静态属性； TS两者都有
2. 我们可以认为类具有 实例部分与 静态部分这两个部分。定义静态属性和方法，只需要在对应的属性和方法前面加上static即可

```typescript
class Animal {
  color:string = 'grey';
  static height:number = 173;
  move(){
      console.log('这是对象实例上面的方法')
  }

  static eat(){
      console.log('这个就是静态方法')
  }
}
// 通过对象cat上来调用的属性和方法 叫做对象实例的属性和方法
// 通过类名Animal来调用的 叫静态属性和方法
let v1 = new Animal();
console.log(Animal.height);
console.log(Animal.eat());
v1.move();
v1.color;
```

3.访问修饰符

​	ts类中修饰符分为3种； public ： 公有(所有)默认； protected：保护 (父类+子类)；private： 私有(本类)

​	1）public在ts里成员都默认为public。也可以明确将一个成员标记成public

```typescript
class Animal {
  public name: string;

  //修饰符还可以使用在构造函数参数中，等同于类中定义该属性，使代码更简洁
  // 下面的age属性就相当于定义在顶部的 一个实例属性，借助修饰符也可以定义
  public constructor(theName: string, public age: number = 24) {
    this.name = theName;
  }

  public move() {
    console.log(123);
  }
}
let a1 = new Animal('Lucy');
console.log(a1.name, a1.age);
// 上面的例子中，name 被设置为了 public，所以直接访问实例的 name 属性是允许的
```

​	2）protected： 属性和方法 如果是用 protected 修饰，则允许在派生类中访问

```typescript
class Animal {
  // 这个name属性就只能在这个类里面访问，类外部访问就会报错
  protected name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
    // 这个基类的name属性是 protected受保护的，所以可以在派生类里面访问
    console.log(this.name);
  }
}
let a1 = new Animal('Lucy');
```

​	3）private： 当成员被标记成 private时，它就不能在声明它的类的外部访问

```typescript
class Animal {
  // 这个name属性就只能在这个类里面访问，类外部访问就会报错
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}
class Dog extends Animal {
  constructor(name) {
    // 派生类的构造函数必须包含super函数的调用
    // 因为父类的构造函数需要一个参数，所以这里我们需要将name参数传递进去
    super(name);
    // console.log(this.name); //属性“name”为私有属性，只能在类“Animal”中访问。所以在派生类里面访问也是不允许的
  }
}
let a1 = new Animal('Lucy');
console.log(a1.name);
```

4.readonly 

 1）只读属性关键字，只允许出现在属性声明或索引签名中

 2）可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化

```typescript
// readonly 修饰符：你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化,不能被更改。
class Person{
    public readonly name:string;
    constructor(name:string){
        this.name = name
    }
}
const person = new Person('Dell')
// person.name = 'hello' // readonly 类型的值，只能读，不能被更改。
console.log(person.name)
```



5.setter 和getter

```typescript
// 注：若编译失败：Accessors are only available when targeting ECMAScript 5 and higher.解决办法：tsc xxx.ts --t es5
// setter getter
class Person{
    constructor(private name:string){}
    get getName(){
        return this.name;
    }
    set setName(name:string){
        this.name = name
    }
}
let person = new Person('lee')
// console.log(person.name) // 会报错,私有属性不能被外部直接访问
console.log(person.getName) // lee  //  可以通过getName获取到Person类里面的私有属性值，从而间接调用了类里面的私有属性（调用时不需要括号，因为getter的写法）

// setter 赋值
person.setName = 'aaaa'
console.log(person.getName) // aaaa

/***/
// 以上可以改写为
class Person{
    constructor(private _name:string){}
    get name(){
        return this._name;
    }
    set name( name:string){
        this._name = name
    }
}
let person = new Person('lee')
person.name = 'aaaa'

```

```typescript
// 用typescript写单例模式: 只能创建一个实例

// class H{
//     constructor(){}
// }
// let d1 = new H()
// let d2 = new H()
// console.log(d1===d2) // false

class Demo{
    private static instance:Demo;
    private constructor(){}
    static getInstance(){//static: 把这个方法直接挂在类上，而不是实例上
        if(!this.instance){
            this.instance = new Demo();
        }
        return this.instance
    }
}
const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()

console.log(demo1===demo2) // true

```



6.抽象类

​	1）抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 	2）`abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```typescript
abstract class Animal {
  name: string = '基类默认值';
  abstract myName: string;
  // 仅仅定义方法的签名，不包含方法体
  abstract makeSound(): void;
  move(): void {
    console.log('动物行走');
  }
}

//下面这行代码就会报错， 无法创建抽象类的实例
//抽象类不能被实例化， 只能作为基类使用，也就是只能给其他类继承
let aa2 = new Animal() //会报错

//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符
class Dog extends Animal {
  myName: string = '抽象成员';
  //如果在这里不写makeSound方法，则也会报错（ 编译报错：非抽象类“Dog”不会实现继承自“Animal”类的抽象成员“makeSound”）：也就是说我们要将基类的抽象方法在派生类这里再实现一次
  makeSound() {
    console.log(`基类的抽象方法必须在派生类中实现--${this.name}--${this.myName}`);
  }
}
let aa3 = new Dog();
console.log(aa3.makeSound());




// 抽象类只能用于继承而不能被实例化。
abstract class Geom{ // 定义了一个抽象类
    width:number;
    getType(){
        return 'Geom'
    }
    // 抽象类里面的抽象方法只能定义方法的签名，具体的方法实现必须在派生类里面
    abstract getArea():number;// 由于每个图形的面积计算方式不一样，则可以定义一个抽象方法getArea
 }
 // 圆形
 class Circle extends Geom{
    getArea(){
        return 123
    }
 }
 // 矩形 
 class Square{
     
 }
 // 三角形
 class Triangle{
     
 }
```

## 六、接口

### 		6.1接口的概念

1. 是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）

2. 在` TypeScript` 中，我们使用接口（Interfaces）来定义对象的类型。除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述

   `TypeScript`的核心原则之一是对值所具有的结构进行类型检查， 在`TypeScript`里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

```typescript
// let a:number = 212
// let v = {}

interface Animal {
  color: string;
  height: number;
}

//  赋值的时候，变量的形状必须和接口的形状保持一致
const labelVal: LabelledValue = {
  color:'灰色';
  height: 56
};
```



```typescript
interface LabelledValue {
  label: string;
  size?: number
}
// 类型别名 type ,跟接口区别在于，type label = string; 而接口必须写成类似对象的形式。
// type LabelledValue = {
//    label:string;
// }
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
// 传size或者不传size，接口可以用问号
let myObj = {label: "Size 10 Object"};
printLabel(myObj);

```

### 6.2可选属性和只读属性

1.有时我们希望不要完全匹配一个形状，那么可以用可选属性

```typescript
interface Person {
  name: string;
  age: number;
  car?: string;
}

let Lucy: Person = {
  name: 'Lucy Lucy',
  age: 18,
  // car: '宝马'
  // house: '别野'
};
// 可选属性的含义是该属性可以不存在 例如我们的car属性.仍然不允许添加未定义的属性 例如我们这里的house属性
```

2.一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly`来指定只读属性

```typescript
// 使用场景：const作为变量使用和readonly作为属性使用
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 }; // 初始化的时候赋值
// p1.x = 5; // 这里就会报错， 说不能分配一个X值，因为它是只读属性

//const与readonly区别： 做为变量使用的话用 const，若做为属性则使用readonly
```

### 6.3任意属性

一个接口可能需要它除了具有我们需要的属性以为，还可以包含任意的其他属性，这时就要用到任意属性

只要使用了任意属性，就要保证确定属性和可选属性的类型都必须是它的类型的子集

```typescript
interface Person {
  name: string;
  age?: number;
  // 这种方式也叫 字符串索引签名
    [propName: string]: string;
  // [propName: string]: any;
  //[propName: string]: number | string;
}

let tom: Person = {
  name: 'Tommy',
  // age: 20,
  addr: '北京'
};

console.log(tom);

// 上例中 任意属性的值允许的是string， 但可选属性age的值确实number， number不是string类型的子属性，所以编译报错。应该将上例的任意属性 变换为 [propName: string]: any; 或者是 number|string

```

### 6.4函数类型接口

1. 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

2. 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的

```typescript
// 之前我们在学习函数的时候给大家提过一点，函数也是一种数据类型，我们也可以通过接口的形式定义一个函数类型
let add = function(x: number, y: string): string {
  return x + y;
};
add(1, '--');
let add1: (x: number, y: string) => string = function(x: number, y: string): string {
  return x + y;
};

// 接口方式
interface MyTypeFn {
  (x: number, y: string): string;
}
let add2:MyTypeFn; 
add2 = function(x: number, y: string): string {
  return x + y;
};
console(add2(1,'fsdf')) // 对应的参数类位置要一一对应
```

### 6.5可索引属性

1. 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如`a[10]`或`ageMap["daniel"]`

2. 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型

```typescript
/**数字索引**/ 
interface MyIndex {
  // 这个表示 索引是数字， 通过索引访问对象里面的值返回数字类型
  [index: number]: number;
}
let arr1: MyIndex;
// 这个接口类型，定义的数据有两种方式实现，一个是对象一个是数组
arr1 = {
  0: 1,
  1: 2
};
arr1 = [2, 3];

/**字符串索引**/ 
interface MyIndex1 {
	// 这个表示 索引是字符串， 通过索引访问对象里面的值返回字符串类型
  [index: string]: string;
}
let arr2: MyIndex1;
arr2 = {
  '0': 'red',
  '1': 'blue'
};


```

3.`TypeScript`支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是要注意：数字索引的返回值必须是字符串索引返回值类型的子类型或者相同；因为`obj[100]`等同于`obj['100']`

```typescript
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
let a3 = new Animal();
let d1 = new Dog();
let d2 = new Dog();
// 错误：使用数值型的字符串索引的返回值Animal不是 使用字符串索引y的返回值Dog  的派生类类， 而是基类
interface NotOkay {
  // number索引的返回值  一定要是 string索引返回值得 派生类或者相同
  // [x: number]: Animal;
  // [y: string]: Dog;
  [x: number]: Dog;
  [y: string]: Animal; // 这里写Dog也可以， 相同或者基类才行； y看也可以换成x，就是一个标识作用
}
let a1: NotOkay = {
  2: a3,
  age: d2
};
```

### 6.6泛型接口

使用泛型接口， 可复用的支持任意传入参数，和我们之前学过的函数类型接口有点相似

```typescript
let fn3 = function(x: string, y: string): string[] {
  return [x, y];
};
// 这个fn3函数的类型我们没有定义，是利用的 类型推论自动获取的，现在使用接口来定义一个符合我们这个函数需要的形状
interface MyFn {
  (x: string, y:string): string[]
}
// 这个时候就可以声明一个带类型的函数
let fn3:MyFn;
// 这个类型再修改一下，增加接口的复用性，将参数string换成动态的，由使用者决定；那么我们就需要使用泛型
interface MyFn {
  <T>(x: T, y: T):T[]
}
let fn3:MyFn;
// 到这里我们的这个函数接口形状就已经完成，还可以将泛型参数提升到我们的接口名称上
interface MyFn<T> {
  (x: T, y:T): T[]
}
let fn3:MyFn;
// 到这里我们的函数类型就可以传入任意类型的值，这个接口形状可复用性就更高了
```



### 6.7继承接口

#### 6.7.1接口继承接口

1.和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里，实现低耦合高内聚的理念

```typescript
interface Animal {
  color: string;
}

interface Dog extends Animal {
  bodyLength: number;
}

let mydog: Dog = <Dog>{};
mydog.color = 'blue';
mydog.bodyLength = 10;
```

2.一个接口可以继承多个接口，创建出多个接口的合成接口

```typescript
interface Animal {
  color: string;
}

interface Dog {
  bodyLength: number;
}

// angular里面大量的使用类继承自多个内置类
interface GreyDog extends Animal, Dog {
  only: string;
}
let mydog: GreyDog = <GreyDog>{};
mydog.color = 'blue';
mydog.bodyLength = 10;
mydog.only = '我的阿黄';
```

#### 6.7.2接口继承类

1.当接口继承了一个类类型时，它会继承类的成员但不包括其实现；就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样

2.类定义会创建两个东西：类的实例类型和一个构造函数。因为类可以创建出类型。所以你能够在允许使用接口的地方使用类。

```typescript
class Animal {
  name: string='yellow';
  move() {
    console.log('这是类里面的方法实现');
  }
}

interface Dog extends Animal {
  eat(): void;
}
let d1: Dog = {
  name: '阿黄',
  move() {
    console.log(456);
  },
  move() {
    console.log('这是具体方法的实现');
  },
  eat() {
    console.log(123);
  }
};
```

### 7.类实现接口

1.`TypeScript`能够用它来明确的强制一个类去符合某种契约

2.实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性; 这个implements在angular里面也有大量的使用

```typescript
interface Alarm {
  // 定义一个公用的方法，具体的实现在实现的类里面去实现
  warning():void;
}
//implements是对某个接口的实现，必须满足接口的类型规范
class Door implements Alarm {
  menbashou:string = '铜制';
  warning() {
    console.log('门报警器');
  }
}
class Car implements Alarm {
  wheel:string = '四个轮胎';
  warning() {
    console.log('车报警器');
  }
}
class Baoma extends Car implements Alarm {
  warning() {
    console.log('宝马车报警器');
  }
}
// 这个案例里面 车和门都有报警功能，所以将这个公共的功能抽离出来封装为一个接口
// 需要这个功能的类比如Car  Door  Baoma  等去实现这个接口 implements即可
// 要注意的是在接口里面是方法的签名，在类里面进行方法体的实现
let d1 = new Door();
let c1 = new Car();
let c2 = new Baoma();
d1.warning();
c1.warning();
// 这个打印只有两个属性； warning这个方法是绑定在构造函数Baoma的原型对象prototype上面的，可以在浏览器里面查看
console.log(c2);
```

总结：接口被编译成js时，接口和类型的东西都没有，也没有编译成对应的js代码。由此可以看到接口在开发过程中起到提示作用，只是作为语法校验的工具。



## 七、类和接口

```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

// 上述代码在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。
// *所以既可以将 Point 当做一个类来用， 也可以将 Point 当做一个类型来用。*/
```

如下示例可以看出：「接口继承类」和「接口继承接口」没有本质区别

```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

//作为类使用
const p = new Point(1, 2); 

//作为类型使用
function printPoint(p: Point) {
    console.log(p.x, p.y);
}
printPoint(new Point(1, 2));

/*-----------------------------------------------------------------------------------*/

// 这个例子等价于：
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// TS偷偷做的事情 ----
interface PointInstanceType {
    x: number;
    y: number;
}

//作为类使用
const p = new Point(1, 2); 

//作为类型使用
function printPoint(p: PointInstanceType ) {
    console.log(p.x, p.y);
}
printPoint(new Point(1, 2));


```

**extends（继承）和 implements（实现）**

```typescript
  interface Person{
    money:number
  }
//implements是对某个接口的实现，必须满足接口的类型规范
  class Father implements Person {
    public money: number = 1000
  }
//extends是对某个类的继承，可获取父类的所有的静态属性
  class Son extends Father {
    constructor() {
      super();
    }
    getMoney(): void {
      console.log(this.money,333);
    }
  }
  const son=new Son()
  son.getMoney()

```

**1、因为类可以作为接口使用，或者说因为类同时实现了接口，所以 TypeScript 中可以有如下关系：**

- 类继承类
- 接口继承接口/类
- 类实现接口/类

**2、implements与extends的定位**

​	**implements：**顾名思义，实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以`重写`属性和方法，包含一些新的功能

​	**extends：**顾名思义，继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法

**3、注意点**

1. 接口不能实现接口或者类，所以实现只能用于类身上,即`类可以实现接口或类`
2. `接口可以继承接口或类`
3. 类不可以继承接口，`类只能继承类`
4. 可多继承或者多实现

## 八、项目配置

​		概述：如果一个目录下存在一个`tsconfig.json`文件，那么它意味着这个目录是TypeScript项目的根目录。

​		**使用tsconfig.json**

- 不带任何输入文件的情况下调用`tsc`，编译器会从当前目录开始去查找`tsconfig.json`文件，逐级向上搜索父目录。
- 不带任何输入文件的情况下调用`tsc`，且使用命令行参数`--project`（或`-p`）指定一个包含`tsconfig.json`文件的目录。

当命令行上指定了输入文件时，`tsconfig.json`文件会被忽略。

### 1、使用`"include"`和`"exclude"`属性

```typescript
{
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

​		如果"files"和"include"都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件（.ts, .d.ts 和 .tsx），排除在"exclude"里指定的文件。JS文件（.js和.jsx）也被包含进来如果allowJs被设置成true。 如果指定了 "files"或"include"，编译器会将它们结合一并包含进来。 使用 "outDir"指定的目录下的文件永远会被编译器排除，除非你明确地使用"files"将其包含进来（这时就算用exclude指定也没用）。

​		使用"include"引入的文件可以使用"exclude"属性过滤。 然而，通过 "files"属性明确指定的文件却总是会被包含在内，不管"exclude"如何设置。 如果没有特殊指定， "exclude"默认情况下会排除node_modules，bower_components，jspm_packages和'outDir'目录。

​		任何被`"files"`或`"include"`指定的文件所引用的文件也会被包含进来。 `A.ts`引用了`B.ts`，因此`B.ts`不能被排除，除非引用它的`A.ts`在`"exclude"`列表中。

​		需要注意编译器不会去引入那些可能做为输出的文件；比如，假设我们包含了`index.ts`，那么`index.d.ts`和`index.js`会被排除在外。 通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。

​		`tsconfig.json`文件可以是个空文件，那么所有默认的文件（如上面所述）都会以默认配置选项编译。

​		在命令行上指定的编译选项会覆盖在`tsconfig.json`文件里的相应选项。
  ``常用 18 项配置选项详解: ``
```javascript

{
  "compilerOptions": {
    "target": "es2020", // 指定 TS 编译成 JS 后的js版本
    "module": "commonjs", // TS 编译成 JS 后采用的模块规范 commonjs amd cmd  es等         
    "lib": ["DOM","ES2020"], /*  指定 TS 编码期间可以使用的库文件版本 比如：ES5就不支持Set集合 */
    "outDir": "./dist", //     指定 TS 文件编译成 JS 后的输出目录                 /* Redirect output structure to the directory. */
    "rootDir": "./src", // 指定 TS 文件源码目录
    "strict": true, // 启用严格检查模式
    "strictNullChecks":false,// null 和 undefined即是值，也是类型, null 和 undefined 值 只能赋值给 any ,unknown和它们各自的类型
    "noImplicitAny": true, // 一般是指表达式或函数参数上有隐含的 any类型时报错
    "experimentalDecorators": true, /* 启用ES7装饰器实验开启选项 */
    "emitDecoratorMetadata": true, /* 启用装饰器元数据开启选项 */
    "declaration": true, // 指定 TS 文件编译后生成相应的.d.ts文件
    "removeComments": false, // TS 文件编译后删除所有的注释
    
    "baseUrl": "src", /* 工作根目录  解析非相对模块的基地址*/
    "paths": {
        "@/datatype/*": ["datatype/*"],
        "@/131/*": ["131/*"],
        "@/132/*": ["132/*"]
      },    
    // 有些依赖库底层 为了兼容CommonJs规范、AMD规范这二者的规范中相互兼容，
    // 使用了 export =，将二者规范统一。
    // "esModuleInterop":true表示允许依赖库中出现export = 这种兼容规范导出的格式，
    //  TS 可以用import from导入 
    "esModuleInterop": true,  
  },
  "include": [ // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
    "./src/**/*.ts", // 匹配src下所有的ts文件
    "src/datatype/typepsenumts"  ],
   "exclude": [
    "./src/**/test",
    "./src/**/premit", 
  ]
}


```



## 九、联合类型和类型保护

​		联合类型与交叉类型很有关联，但是使用上却完全不同。 偶尔你会遇到这种情况，一个代码库希望传入 `number`或 `string`类型的参数。 例如下面的函数：

```typescript
interface Bird{
	fly:boolean;
    sing:()=>{};
}
interface Dog{
    fly:boolean;
    bark:()=>{}
}
// 方式1：用断言的方式实现类型保护
function trainAnimal(animal:Bird|Dog){
    // 联合类型，直接调用animal.sing()则会报错，因为sing方法只存在于Bird接口。
    // animal.sing() // 会报错

    // 解决以上的问题：使用类型断言的方式，实现类型保护。
    if(animal.fly){
        (animal as Bird).sing()
    }else {
        (animal as Dog).bark()
    }
}
// 方式2：用in 语法来做类型保护
function trainAnimalSecond(animal:Bird|Dog){
    if('sing' in animal){
        animal.sing()
    }else{
        animal.bark()
    }
}
// 方法3：typeof 语法来做类型保护
function add(first:string|number,second:string|number){
   //  return first + second //如果直接这样相加，则会报错，因为无法推论参数联合类型最终计算的返回值的类型

   // 使用typeof来做类型保护
   if(typeof first === 'string'|| typeof second === 'string'){
       return `${first}${second}`;
   }
   return first+second;
}

// 方法4：instanceof 语法来做类型保护
class NumberObj{ // 只有类才有instanceof
    count:number
}
function addSecond(first:object|NumberObj,second:object|NumberObj){
    if(first instanceof NumberObj&&second instanceof NumberObj){
        return first.count + second.count
    }
    return 0
}
```

## 十、泛型

​		在像C#和Java这样的语言中，可以使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

​		泛型：泛指的类型

### 	1、函数泛型

```typescript
// 定义一个泛型
function join<ABC>(first:ABC,second:ABC){
  return `${first}${second}`
}
// join<string>('1',1) // 报错
// join<string>(1,"1") // 报错
join<string>('1','1')


// function map<AB>(params:AB[]){
//   return params
// }
// map<string>(['123'])

function map<AB>(params:Array<AB>){
  return params
}
map<string>(['123'])
```

```typescript
// 定义多个泛型
function join<T,P>(first:T,second:P){
  return `${first}${second}`
}
join<string,number>('1',2)
join('1',2) // 这样也不会报错，底层机制的推断。
```

```typescript
// 泛型可以作为函数的返回类型
function join<T>(first:T,second:T):T{
  return first
}
join<string>('1','2')
```

### 	2、类中的泛型

```typescript
// 1.类中使用泛型
class dataManager<T>{
  constructor(private data:T[]){}
  getItem(index:number):T{
    return this.data[index]
  }
}
// const data = new dataManager([1,2]) // 不会报错，底层用了类型推断
const data = new dataManager<number>([1,2])
console.log(data.getItem(0))

// 2.泛型继承接口中定义的类型
interface Item{
  name:string;
}
class manager<T extends Item>{
  constructor(private data:T[]){}
  getItem(index:number):string{
    return this.data[index].name
  }
}
const data = new manager([{
  name:'dell'
}])
console.log(data.getItem(0))
```

```typescript
// 利用extends约束泛型的类型
class demo<T extends string|number>{
  constructor(private data:T[]){}
  getItem(index:number):T{
    return this.data[index]
  }
}
const data = new demo<number>([1,2])
console.log(data.getItem(0))

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params:T){
  return params
}
const func:<T>(params:T) => T = hello
```

## 十一、TypeScript 模块

 **模块的的概念（官方）:**

 	关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。 “内部模块”现在称做“命名空间”。

​     “外部模块”现在则简称为“模块” 模块在其自身的作用域里执行，而不是在全局作用域里；

​     这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。

​     相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import形式之一。

  **模块的概念（自己理解）：**

​    我们可以把一些公共的功能单独抽离成一个文件作为一个模块。

​    模块里面的变量 函数 类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），

​    我们需要通过export暴露模块里面的数据（变量、函数、类...）。

​    暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。

## 十二、命名空间-namespace

​		命名空间：在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内。

 		同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过export关键字对外暴露。

​         **命名空间和模块的区别：**

​		命名空间：内部模块，主要用于组织代码，避免命名冲突。

​		模   块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

```typescript
// module.ts文件
namespace A{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 吃猫粮。`);
        }
    }   

}

namespace B{
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 在吃狗粮。`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat() {
            console.log(`${this.name} 在吃猫粮。`);
        }
    }   

}

var c=new B.Cat('小花');

c.eat();

```

命名空间导出导入使用

```typescript
// 将上面module.ts文件的namespace前面加上export 


// index.ts文件
import {A,B} from './module.ts';

var d=new A.Dog('小黑');
d.eat();

var dog=new B.Dog('小花');
dog.eat();
```



## 十三、装饰器

​	装饰器是一种特殊类型的声明，它能够被附加到[类声明](https://www.tslang.cn/docs/handbook/decorators.html#class-decorators)，[方法](https://www.tslang.cn/docs/handbook/decorators.html#method-decorators)， [访问符](https://www.tslang.cn/docs/handbook/decorators.html#accessor-decorators)，[属性](https://www.tslang.cn/docs/handbook/decorators.html#property-decorators)或[参数](https://www.tslang.cn/docs/handbook/decorators.html#parameter-decorators)上。

​	通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

​	常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

​	装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

​	装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一

### 13.1.类的装饰器

​	类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 传入一个参数

1.普通装饰器（无法传参）

```typescript
function logClass(target:any){
    console.log(target);// target 就是当前类-HttpClient  

    params.prototype.apiUrl='动态扩展的属性';

    // 在不修改HttpClient类的情况下，可以给它扩展一个run方法
    params.prototype.run=function(){
        console.log('我是一个run方法');
    }

}

@logClass
class HttpClient{
    constructor(){
    }
    getData(){

    }
}

var http:any=new HttpClient();
console.log(http.apiUrl);  // 动态扩展的属性

```

2.类装饰器:装饰器工厂（可传参）

```typescript
function logClass(params:string){
    return function(target:any){
        console.log(target); // target 就是当前类-HttpClient  
        console.log(params); // hello
        target.prototype.aa=params;
    }
}
@logClass('hello')
class HttpClient{
    constructor(){
    }

    getData(){

    }
}
var http:any=new HttpClient();
console.log(http.aa); // hello
```

3.类装饰器，可以重载构造函数

​	下面是一个重载构造函数的例子。

​	 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。

 	如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

```typescript

class HttpClient{
    public apiUrl:string | undefined; // 只定义string类型时，会有警告，主要是防止不给apiUrl赋值，解决这个警告，可以赋一个undefined类型。
    constructor(){
        this.apiUrl='我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}
var http=new HttpClient();
http.getData(); // 我是构造函数里面的apiUrl


// 使用装饰器
function logClass(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any='我是修改后的数据';
        // 如果不重载，则会报错
        getData(){
            this.apiUrl=this.apiUrl+'----';
            console.log(this.apiUrl);
        }
    }
}


@logClass
class HttpClient{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl='我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}

var http=new HttpClient();
http.getData();

```

### 13.2.属性装饰器

  属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

​      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

​      2、成员的名字。

```typescript

//类装饰器
function logClass(params:string){
    return function(target:any){
        // console.log(target);
        // console.log(params);       

    }
}

//属性装饰器
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(target);
        console.log(attr);
        // target为类的原型对象target.prototype
        target[attr]=params;
    }
}
@logClass('xxxx')
class HttpClient{
    @logProperty('http://baidu.com')
    public url:any |undefined;
    constructor(){
    }
    getData(){
        console.log(this.url);
    }
}
var http=new HttpClient();
http.getData(); // http://baidu.com

```

### 13.3方法装饰器

​	它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

​    		方法装饰会在运行时传入下列3个参数：

​      		1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

​      		2、成员的名字。

​      		3、成员的属性描述符。

```typescript
// 方法装饰器一
function get(params:any){
     return function(target:any,methodName:any,desc:any){
         console.log(target); // 原型对象
         console.log(methodName); // 方法名称
         console.log(desc); // 描述
         target.apiUrl='xxxx'; // 扩展属性
         target.run=function(){
             console.log('run');
         }
     }
 }

class HttpClient{  
    public url:any |undefined;
    constructor(){
    }
    @get('http://www.baidu.com')
    getData(){
        console.log(this.url);
    }
}

var http:any=new HttpClient();
console.log(http.apiUrl); // xxxx
http.run(); // run
```



```typescript
// 方法装饰器二：方法装饰器修改方法
function get(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc.value); // 打印的是该getData方法     

        //修改装饰器的方法  实现：把装饰器方法里面传入的所有参数改为string类型

        //1、保存当前的方法
        var oMethod=desc.value;
        desc.value=function(...args:any[]){                
            args=args.map((value)=>{
                return String(value);
            })
            // console.log(args);
            
            // 如果不加这个  那么上面所写的方法就会完全替换HttpClient中的getData方法
            oMethod.apply(this,args);
        }

    }
}

class HttpClient{  
    public url:any |undefined;
    constructor(){
    }
    @get('http://www.baidu.com')
    getData(...args:any[]){
        console.log(args);
        console.log('我是getData里面的方法');
    }
}

var http=new HttpClient();
http.getData(123,'xxx'); // ['123','xxx'] 
```

### 13.4方法参数装饰器 

​	参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据 ，传入下列3个参数：

​     1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

​      2、方法的名字。

​      3、参数在函数参数列表中的索引。

```typescript
function logParams(params:any){
    return function(target:any,methodName:any,paramsIndex:any){
        console.log(params); // xxxxx
        console.log(target); // 当前类的原型对象
        console.log(methodName); // 当前的方法名称
        console.log(paramsIndex);// 参数在函数参数列表中的索引。
        target.apiUrl=params;

    }   

}

class HttpClient{  
    public url:any |undefined;
    constructor(){
    }           
    getData(@logParams('xxxxx') uuid:any){               
        console.log(uuid); // 传入的参数赋值给uuid了
    }
}


var http:any = new HttpClient();
http.getData(123456); // 传入的参数赋值给uuid了
console.log( http.apiUrl); // xxxxx
```

### 13.5装饰器执行顺序

```typescript
//属性》方法》方法参数》类

// 如果有多个同样的装饰器，它会先执行后面的

function logClass1(params:string){
    return function(target:any){
        console.log('类装饰器1')
    }
}

function logClass2(params:string){
    return function(target:any){
        console.log('类装饰器2')
    }
}

function logAttribute1(params?:string){
    return function(target:any,attrName:any){
        console.log('属性装饰器1')
    }
}

function logAttribute2(params?:string){
    return function(target:any,attrName:any){
        console.log('属性装饰器2')
    }
}

function logMethod1(params?:string){
    return function(target:any,attrName:any,desc:any){
        console.log('方法装饰器1')
    }
}
function logMethod2(params?:string){
    return function(target:any,attrName:any,desc:any){
        console.log('方法装饰器2')
    }
}



function logParams1(params?:string){
    return function(target:any,attrName:any,desc:any){
        console.log('方法参数装饰器1')
    }
}

function logParams2(params?:string){
    return function(target:any,attrName:any,desc:any){
        console.log('方法参数装饰器2')
    }
}

@logClass1('http://www.baidu.com')
@logClass2('xxxx')
class HttpClient{
    @logAttribute1()
    @logAttribute2()
    public apiUrl:string | undefined;
    constructor(){
    }

    @logMethod1()
    @logMethod2()
    getData(){
        return true;
    }

    setData(@logParams1() attr1:any,@logParams2() attr2:any,){

    }
}

var http:any=new HttpClient();

```

