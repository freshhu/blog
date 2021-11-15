# 六、 内置对象、数据类型
## 1 - 内置对象

### 1.1 内置对象

​		 JavaScript 中的对象分为3种：**自定义对象 、内置对象、 浏览器对象**
​		前面两种对象是JS 基础 内容，属于 ECMAScript；  第三个浏览器对象属于 JS 独有的， JS API 讲解内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是**最基本而必要的功能**（属性和方法），内置对象最大的优点就是帮助我们快速开发

​	 	JavaScript 提供了多个内置对象：Math、 Date 、Array、String等	

### 1.2 查文档

​		查找文档：学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。
​		Mozilla 开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括 HTML、CSS 和万维网及 HTML5 应用的 API。
​		MDN:https://developer.mozilla.org/zh-CN/

### 1.3 Math对象

​		Math 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用 Math 中的成员。

| 属性、方法名          | 功能                                         |
| --------------------- | -------------------------------------------- |
| Math.PI               | 圆周率                                       |
| Math.floor()          | 向下取整                                     |
| Math.ceil()           | 向上取整                                     |
| Math.round()          | 四舍五入版 就近取整   注意 -3.5   结果是  -3 |
| Math.abs()            | 绝对值                                       |
| Math.max()/Math.min() | 求最大和最小值                               |
| Math.random()         | 获取范围在[0,1)内的随机值                    |

​	注意：上面的方法使用时必须带括号

​	**获取指定范围内的随机整数**：

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
```

### 1.4 日期对象

​	 	Date 对象和 Math 对象不一样，Date是一个构造函数，所以使用时需要实例化后才能使用其中具体方法和属性。Date 实例用来处理日期和时间

- 使用Date实例化日期对象

  - 获取当前时间必须实例化：

  ```js
  var now = new Date();
  ```

  - 获取指定时间的日期对象

  ```js
  var future = new Date('2019/5/1');
  ```

  注意：如果创建实例时并未传入参数，则得到的日期对象是当前时间对应的日期对象

- 使用Date实例的方法和属性	

  ![](/blog/images/basics/js/base-six-img1.png)

- 通过Date实例获取总毫米数

  - 总毫秒数的含义

    ​	基于1970年1月1日（世界标准时间）起的毫秒数

  - 获取总毫秒数

    ```js
    // 实例化Date对象
    var now = new Date();
    // 1. 用于获取对象的原始值
    console.log(date.valueOf())	
    console.log(date.getTime())	
    // 2. 简单写可以这么做
    var now = + new Date();			
    // 3. HTML5中提供的方法，有兼容性问题
    var now = Date.now();
    ```

### 1.5 数组对象

#### 创建数组的两种方式

- 字面量方式

  - 示例代码如下：

    ```js
    var arr = [1,"test",true];
    ```

- new Array()

  - 示例代码如下：

    ```
    var arr = new Array();
    ```

    ​	注意：上面代码中arr创建出的是一个空数组，如果需要使用构造函数Array创建非空数组，可以在创建数组时传入参数

    ​	参数传递规则如下：

    - 如果只传入一个参数，则参数规定了数组的长度

    - 如果传入了多个参数，则参数称为数组的元素

#### 检测是否为数组

- instanceof 运算符

  - instanceof 可以判断一个对象是否是某个构造函数的实例

    ```js
    var arr = [1, 23];
    var obj = {};
    console.log(arr instanceof Array); // true
    console.log(obj instanceof Array); // false
    ```

- Array.isArray()

  - Array.isArray()用于判断一个对象是否为数组，isArray() 是 HTML5 中提供的方法

    ```js
    var arr = [1, 23];
    var obj = {};
    console.log(Array.isArray(arr));   // true
    console.log(Array.isArray(obj));   // false
    ```

#### 添加删除数组元素的方法

- 数组中有进行增加、删除元素的方法，部分方法如下表

  ![](/blog/images/basics/js/base-six-img2.png)

  注意：push、unshift为增加元素方法；pop、shift为删除元素的方法

#### 数组排序

- 数组中有对数组本身排序的方法，部分方法如下表

  ![](/blog/images/basics/js/base-six-img3.png)

  注意：sort方法需要传入参数来设置升序、降序排序

  - 如果传入“function(a,b){ return a-b;}”，则为升序
  - 如果传入“function(a,b){ return b-a;}”，则为降序

#### 数组索引方法

- 数组中有获取数组指定元素索引值的方法，部分方法如下表

  ![](/blog/images/basics/js/base-six-img4.png)

#### 数组转换为字符串

- 数组中有把数组转化为字符串的方法，部分方法如下表

  ![](/blog/images/basics/js/base-six-img5.png)

  注意：join方法如果不传入参数，则按照 “ , ”拼接元素

#### 其他方法

- 数组中还有其他操作方法，同学们可以在课下自行查阅学习

	![](/blog/images/basics/js/base-six-img6.png)

### 1.6 字符串对象

#### 基本包装类型

​		为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean。

​		基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。

```js
// 下面代码有什么问题？
var str = 'andy';
console.log(str.length);
```

​		按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，但上面代码却可以执行，这是因为

​		js 会把基本数据类型包装为复杂数据类型，其执行过程如下 ：

```js
// 1. 生成临时变量，把简单类型包装为复杂数据类型
var temp = new String('andy');
// 2. 赋值给我们声明的字符变量
str = temp;
// 3. 销毁临时变量
temp = null;
```

#### 字符串的不可变

​		指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。

​		当重新给字符串变量赋值的时候，变量之前保存的字符串不会被修改，依然在内存中重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变。
​		由于字符串的不可变，在**大量拼接字符串**的时候会有效率问题

#### 根据字符返回位置

​		字符串通过基本包装类型可以调用部分方法来操作字符串，以下是返回指定字符的位置的方法：

![](/blog/images/basics/js/base-six-img7.png)

​		案例：查找字符串"abcoefoxyozzopp"中所有o出现的位置以及次数

1. 先查找第一个o出现的位置
2. 然后 只要indexOf 返回的结果不是 -1 就继续往后查找
3. 因为indexOf 只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找 	

#### 根据位置返回字符

​		字符串通过基本包装类型可以调用部分方法来操作字符串，以下是根据位置返回指定位置上的字符：

![](/blog/images/basics/js/base-six-img8.png)

​		在上述方法中，charCodeAt方法返回的是指定位置上字符对应的ASCII码，ASCII码对照表如下：

![](/blog/images/basics/js/base-six-img9.png)

​		案例：判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数

1. 核心算法：利用 charAt(） 遍历这个字符串

2. 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1

3. 遍历对象，得到最大值和该字符 	

   ​	注意：在遍历的过程中，把字符串中的每个字符作为对象的属性存储在对象总，对应的属性值是该字符出现的次数

#### 字符串操作方法

​		字符串通过基本包装类型可以调用部分方法来操作字符串，以下是部分操作方法：

![](/blog/images/basics/js/base-six-img10.png)

#### replace()方法

​		replace() 方法用于在字符串中用一些字符替换另一些字符，其使用格式如下：  

```
字符串.replace(被替换的字符串， 要替换为的字符串)；
```

#### split()方法

​		split()方法用于切分字符串，它可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。

​		其使用格式如下：

```
字符串.split("分割字符")
```

## 2 - 简单数据类型和复杂数据类型

### 2.1 简单数据类型

​		**简单类型**（**基本数据类型**、**值类型**）：在存储时变量中存储的是值本身，包括string ，number，boolean，undefined，null

### 2.2 复杂数据类型

​		**复杂数据类型（引用类型）**：在存储时变量中存储的仅仅是地址（引用），通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等；

### 2.3 堆栈

- 堆栈空间分配区别：

　　1、栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；

简单数据类型存放到栈里面

　　2、堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。

![](/blog/images/basics/js/base-six-img11.png)

- 简单数据类型的存储方式

  ​		值类型变量的数据直接存放在变量（栈空间）中

![](/blog/images/basics/js/base-six-img12.png)

- 复杂数据类型的存储方式

  ​		引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中

  ![](/blog/images/basics/js/base-six-img13.png)

### 2.4 简单类型传参

​		函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。

```js
function fn(a) {
    a++;
    console.log(a); 
}
var x = 10;
fn(x);
console.log(x)；
```

​		运行结果如下：

![](/blog/images/basics/js/base-six-img14.png)

### 2.5 复杂数据类型传参

​		函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。

```JavaScript
function Person(name) {
    this.name = name;
}
function f1(x) { // x = p
    console.log(x.name); // 2. 这个输出什么 ?    
    x.name = "张学友";
    console.log(x.name); // 3. 这个输出什么 ?    
}
var p = new Person("刘德华");
console.log(p.name);    // 1. 这个输出什么 ?   
f1(p);
console.log(p.name);    // 4. 这个输出什么 ?  
```

​		运行结果如下：

![](/blog/images/basics/js/base-six-img15.png)

### 2.6 检测出所有的类型最好的方法object.prototype.toString.call()
判断js数据类型的四种方法，以及各自的优缺点：

首先我们简单的说一下js中的几种数据类型
数据类型分为基本类型和引用类型：
- 基本类型：String、Number、Boolean、Null、Undefined、symbol
- 引用类型：Object、Array、Date、Function、Error、RegExp、Math、Number、String、Boolean、Globle。

然后判断数据类型的方法一般可以通过：typeof、instanceof、constructor、toString四种常用方法。
 #### 2.6.1 typeof（可以对基本类型做出准确的判断，但对于引用类型，用它就有点力不从心了）

  typeof 返回一个表示数据类型的字符串，返回结果包括：number、boolean、string、object、undefined、function等6种数据类型。
  typeof 可以对JS基本数据类型做出准确的判断（除了null），而对于引用类型返回的基本上都是object, 其实返回object也没有错，因为所有对象的原型链最终都指向了Object,Object是所有对象的`祖宗`。 但当我们需要知道某个对象的具体类型时，typeof 就显得有些力不从心了。
  注意：typeof  null会返回object，因为特殊值null被认为是一个空的对象引用


 #### 2.6.2 instanceof
判断对象和构造函数在原型链上是否有关系，如果有关系，返回真，否则返回假
```js
function Aaa(){
}
 
var a1 = new Aaa();
 
//alert( a1 instanceof Aaa);  //true
//判断a1和Aaa是否在同一个原型链上，是的话返回真，否则返回假

var arr = [];
 
alert( arr instanceof Aaa);//false

```
我们来看一下
```js
	var str = 'hello';
    alert(str instanceof String);//false
    var bool = true;
    alert(bool instanceof Boolean);//false
    var num = 123;
    alert(num instanceof Number);//false
    var nul = null;
    alert(nul instanceof Object);//false
    var und = undefined;
    alert(und instanceof Object);//false
    var oDate = new Date();
    alert(oDate instanceof Date);//true
    var json = {};
    alert(json instanceof Object);//true
    var arr = [];
    alert(arr instanceof Array);//true
    var reg = /a/;
    alert(reg instanceof RegExp);//true
    var fun = function(){};
    alert(fun instanceof Function);//true
    var error = new Error();
    alert(error instanceof Error);//true
```
从上面的运行结果我们可以看到，基本数据类型是没有检测出他们的类型，但是我们使用下面的方式创建num、str、boolean，是可以检测出类型的：
```js
var num = new Number(123);
var str = new String('abcdef');
var boolean = new Boolean(true);

```
 #### 2.6.3 constructor：查看对象对应的构造函数
 constructor 在其对应对象的原型下面，是自动生成的。当我们写一个构造函数的时候，程序会自动添加：构造函数名.prototype.constructor = 构造函数名
```js
function Aaa(){
}

//Aaa.prototype.constructor = Aaa;//每一个函数都会有的，都是自动生成的   

//Aaa.prototype.constructor = Aaa;

```
判断数据类型的方法
```js
 	var str = 'hello';
    alert(str.constructor == String);//true
    var bool = true;
    alert(bool.constructor == Boolean);//true
    var num = 123;
    alert(num.constructor ==Number);//true
   // var nul = null;
   // alert(nul.constructor == Object);//报错
    //var und = undefined;
    //alert(und.constructor == Object);//报错
    var oDate = new Date();
    alert(oDate.constructor == Date);//true
    var json = {};
    alert(json.constructor == Object);//true
    var arr = [];
    alert(arr.constructor == Array);//true
    var reg = /a/;
    alert(reg.constructor == RegExp);//true
    var fun = function(){};
    alert(fun.constructor ==Function);//true
    var error = new Error();
    alert(error.constructor == Error);//true

```
从上面的测试中我们可以看到，undefined和null是不能够判断出类型的，并且会报错。因为null和undefined是无效的对象，因此是不会有constructor存在的
同时我们也需要注意到的是：使用constructor是不保险的，因为constructor属性是可以被修改的，会导致检测出的结果不正确
```js
function Aaa(){
}
Aaa.prototype.constructor = Aaa;
//程序可以自动添加，当我们写个构造函数的时候，程序会自动添加这句代码


function BBB(){}
Aaa.prototype.constructor = BBB;
//此时我们就修改了Aaa构造函数的指向问题

alert(Aaa.construtor==Aaa);//false

```
可以看出，constructor并没有正确检测出正确的构造函数

 #### 2.6.4 Object.prototype.toString(可以说不管是什么类型，它都可以立即判断出)
toString是Object原型对象上的一个方法，该方法默认返回其调用者的具体类型，更严格的讲，是 toString运行时this指向的对象类型, 返回的类型
格式为[object xxx],xxx是具体的数据类型，其中包括：
String,Number,Boolean,Undefined,Null,Function,Date,Array,RegExp,Error,HTMLDocument,... 基本上所有对象的类型都可以通过这个方法获取到。 
```js
var str = 'hello';
console.log(Object.prototype.toString.call(str));//[object String]
var bool = true;
console.log(Object.prototype.toString.call(bool))//[object Boolean]
var num = 123;
console.log(Object.prototype.toString.call(num));//[object Number]
var nul = null;
console.log(Object.prototype.toString.call(nul));//[object Null]
var und = undefined;
console.log(Object.prototype.toString.call(und));//[object Undefined]
var oDate = new Date();
console.log(Object.prototype.toString.call(oDate));//[object Date]
var json = {};
console.log(Object.prototype.toString.call(json));//[object Object]
var arr = [];
console.log(Object.prototype.toString.call(arr));//[object Array]
var reg = /a/;
console.log(Object.prototype.toString.call(reg));//[object RegExp]
var fun = function(){};
console.log(Object.prototype.toString.call(fun));//[object Function]
var error = new Error();
console.log(Object.prototype.toString.call(error));//[object Error]

```
从这个结果也可以看出，不管是什么类型的，Object.prototype.toString.call();都可以判断出其具体的类型。

接下来我们分析一下四种方法各自的优缺点

| 不同类型的优缺点 | **typeof**                   | **instanceof**                     | **constructor**                             | **Object.prototype.toString.call** |
| ---------------- | ---------------------------- | ---------------------------------- | ------------------------------------------- | ---------------------------------- |
| 优点             | 使用简单                     | 能检测出引用类型                   | 基本能检测所有的类型（除了null和undefined） | 检测出所有的类型                   |
| 缺点             | 只能检测出基本类型（除null） | 不能检测出基本类型，且不能跨iframe | constructor易被修改，也不能跨iframe         | IE6下，undefined和null均为Object   |

从上表中我们看到了，instanceof和constructor不能跨iframe,上面没有细说，所以下面我们直接上例子：
例：跨页面判断是否是数组
```js
window.onload = function(){
	
	var oF = document.createElement('iframe');
	document.body.appendChild( oF );
	
	var ifArray = window.frames[0].Array;
	
	var arr = new ifArray();
	
	//alert( arr.constructor == Array );  //false
	
	//alert( arr instanceof Array );  //false
	
	alert( Object.prototype.toString.call(arr) == '[object Array]' );  //true
	
	
};

```
从结果中可以看出，constructor和instanceof都没有正确的判断出类型，只有object.prototype.toString.call()；正确判断出了
其实面试官也经常喜欢让说一种最简单的判断是数组的方法，记住是object.prototype.toString.call() 哦！
