# TypeScript

## 一、TypeScript 是什么

[TypeScript](https://www.typescriptlang.org/) 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。下图显示了 TypeScript 与 ES5、ES2015 和 ES2016 之间的关系：

![base-one1](/blog/images/basics/base-one1.png)

### 1.1 TypeScript 与 JavaScript 的区别

![base-one2](/blog/images/basics/base-one2.png)

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
    # helloworld.ts => helloworld.js 
   tsc helloworld.ts  
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

​		和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。

​		1、为函数定义类型

```typescript
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
const func1:(str:string) => number = (str) => {
    return parseInt(str,10)
} 
```

## 五、函数的重载



## 六、接口

​		typeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

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

```typescript
// readonly:只读属性 ，只读不能被更改。
interface Person {
	readonly age:number;
}
const setPersonName = (person:Person):void => {
    person.age = 12
}
const person = {
    age:16
}
setPersonName(person) // 会报错
```

```typescript
// 对象强校验
interface Person {
    name:string;
    age?:number;
}
let getPersonName = (person:Person):void => {
    console.log(person.name)
}
// 变量的形式进行传参，则除了可以传name、age还可以传别的参数则不会报错
let person = {
 		name:'dell',
		sex:'male'
 }
getPersonName(person)

// 字面量的形式传参
getPersonName({name:'dell',sex:'male'}) // 此时会报错，会进行对象的强校验
// 如果使以上不报错，则可以如下写法：
interface Person {
    name:string;
    age?:number;
    [propName:string]:any; // 其他属性，属性名称是字符串，属性的值是任何类型的。
}

```

类类型
```typescript
// 接口可以定义方法
interface Person {
  name:string;
  age?:number;
  say():string;
}
// 接口类的继承
interface Teacher extends Person{
	teach():string;
}

// 定义函数类型接口
interface SayHi {
    (word:string):string // 函数传一个word，类型为string。返回的是一个string类型的值
}

let getPersonName = (person:Teacher):void => {
  console.log(person.name)
}
let person = {
  name:'dell',
 sex:'male',
 say(){
   return 'hello world'
 },
 teach(){
   return 'jiaoshu'
 }
}
// 使用继承的接口
getPersonName(person)
// 使用定义的函数接口
let say:SayHi = (word:string)=>{
    return word
}

// User类去应用接口Person
class User implements Person {
    name = 'dell';
    say(){
        return 'hello'
    }
}

```

总结：接口被编译成js时，接口和类型的东西都没有，也没有编译成对应的js代码。由此可以看到接口在开发过程中起到提示作用，只是作为语法校验的工具。

## 七、类

​		传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

### 1.类定义与继承

```typescript
class Person {
 	name = 'dell';
    age = 10;
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}
class Teacher extends Person{
    getTeacherName(){
        return 'teacher'
    }
    getAge(){
        // 使用super可以调用父类的方法
        return super.getAge()+12
    }
}
const teacher = new Teacher()
console.log(teacher.getName()) // dell
console.log(teacher.getTeacherName()) // teacher
//子类重写父类的方法或者属性
console.log(teacher.getAge()) // 22
```

### 2.类中的访问类型与构造器

```typescript
// private protected public 访问类型
// public 允许在类的内和类的外被调用
class Person{
    name:string; // 如果没有设置访问类型，则前面默认为public
}
const person = new Person()
person.name = 'dell'; // 由于name的访问类型为public 则可以赋值,也可以访问
console.log(person.name)


// private 允许在类内使用
class Person{
   private name:string; 
}
const person = new Person()
// person.name = 'dell'; //报错 由于name的访问类型为private则不能在类外使用
// console.log(person.name)//报错


// protected 允许在类内及子类继的子类中使用
class Person{
    public name:string; 
    protected say(){
        console.log('hello')
    }
 }
 class Teacher extends Person{
     public sayBye(){
         this.say()
     }
 }
 const person = new Person()
 person.name = 'dell'; 
 console.log(person.name) // dell
 
 const teacher= new Teacher()
 teacher.sayBye() // hello


// 构造器
class Person{
    // 传统写法
    // public name:string;
    // constructor(name:string){
    //     this.name = name
    // }

    // 简化写法
    constructor(public name:string){
        
    }
}
let person = new Person('zhangsan')
console.log(person.name) // zhangsan
// super:如果子类写有构造器，则必须要在这个构造器中写调用super，并需要传入父类构造器中的参数，如果父类构造器中没有参数，则不需要传。
class Animal{
    constructor(public name:string){

    }
}
let animal = new Animal('动物1');

class Bird extends Animal{
    constructor(public age:number){
        super('动物2') //调用父类构造函数，并将参数传递过去
    }
}

let bird = new Bird(12)
console.log(bird.name) // 动物2
console.log(bird.age) // 12


```

### 3.静态属性，Setter和Getter

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

```typescript
// readonly 修饰符：你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
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

### 4.抽象类

​		抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 `abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```typescript
// 抽象类只能用于继承而不能被实例化。
abstract class Geom{ // 定义了一个抽象类
    width:number;
    getType(){
        return 'Geom'
    }
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

## 八、类和接口

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

## 九、项目配置

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

```javascript
{
  "compilerOptions": {
  
    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}


```



## 十、联合类型和类型保护

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

## 十一、泛型

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

## 十二、TypeScript 模块

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

## 十三、命名空间-namespace

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



## 十四、类的装饰器

​		装饰器是一种特殊类型的声明，它能够被附加到[类声明](https://www.tslang.cn/docs/handbook/decorators.html#class-decorators)，[方法](https://www.tslang.cn/docs/handbook/decorators.html#method-decorators)， [访问符](https://www.tslang.cn/docs/handbook/decorators.html#accessor-decorators)，[属性](https://www.tslang.cn/docs/handbook/decorators.html#property-decorators)或[参数](https://www.tslang.cn/docs/handbook/decorators.html#parameter-decorators)上。 装饰器使用 `@expression`这种形式，`expression`求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

```typescript

```



