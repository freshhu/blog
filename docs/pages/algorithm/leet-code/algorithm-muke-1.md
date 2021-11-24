
# 慕课网学习-算法

## 1.栈的应用
栈是一个先进后出的数据结构。
### 1.1栈的应用
栈可以应用于进行十进制转二进制、有效括号、JS中的函数调用栈

### 1.2题：有效的括号(力扣对应题号20)
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合

``示例 1：``
```bash
输入：s = "()"
输出：true
```
``示例 2：``
```bash
输入：s = "()[]{}"
输出：true
```
``示例 3：``
```bash
输入：s = "(]"
输出：false
```
``示例 4：``
```bash
输入：s = "([)]"
输出：false
```
``示例 5：``
```bash
输入：s = "{[]}"
输出：true
```
``提示：``
- <= s.length <= 104
- s 仅由括号 '()[]{}' 组成


``**********解题**********``
```js
// 解题的思路：栈的 出栈入栈

var isValid = function(s) { 
    // 当括号为奇数时，则所涉及的括号不会闭合，因此直接返回false
    if(s.length%2 === 1){ return false; }

    const stack = []
    for(let i=0;i<s.length;i++){
        const c = s[i]
        if(c ==='(' || c ==='{' || c==='['){
            stack.push(c) // 入栈
        }else{
            const t = stack[stack.length-1]; // 取数组最后一位的正括号 与当前c反括号进行配对判断
            if(
                (t === '(' && c===')') ||
                (t === '{' && c==='}') ||
                (t === '[' && c===']')
                
            ){ // 判断反括号
                stack.pop() //出栈
            }else{ // 除了) } ] 这三种反括号，则直接返回为false
                return false
            }
        }
    }

    return stack.length === 0  // 返回最终结果，如果stack数组为空，则证明括号有效
};
```


### 1.3 前端与栈：JS中的函数调用堆栈

如下函数调用：
```js
// 可以打断点 看入栈和出栈情况  func3后入栈，最先出栈
const func1 = () => {
    console.log(1)
    func2();
    console.log(4)
};
const func2 = () => {
    console.log(2)
    func3();
    console.log(5)
};
const func3 = () => {
    console.log(3)
};

func1();

// 最终打印的顺序为 1 2 3 5 4

// 当上述代码在浏览器中加载时，JavaScript 引擎会创建一个全局执行上下文并且将它推入当前的执行栈。当调用 func1() 函数时，JavaScript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。
// 当在 func1() 函数中调用 func2() 函数时，Javascript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。
// 当在 func2() 函数中调用 func3() 函数时，Javascript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。
// 当 func3() 函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文，即 func2() 函数的执行上下文。
// 当 func2() 函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文，即 func1() 函数的执行上下文。
// 当 func1() 函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到全局执行上下文。一旦所有代码执行完毕，Javascript 引擎把全局执行上下文从执行栈中移除。
```

## 2.队列
队列是先进先出的数据结构。javascript没有队列功能，但是可以通过array实现其功能。

```js
const queue = [];
// 入队
queue.push(1);
queue.push(2);
// 出队
const item1 = queue.shift(); // 1 移除数组第一个元素，并返回它
const item2 = queue.shift(); // 2

```

### 2.1 应用场景
- 需要先进先出的场景
- 比如食堂排队打饭
- JS异步中的任务队列：JS是单线程，无法同时处理异步中的并发任务；使用任务队列先后处理异步任务。
- 计算最近请求次数

### 2.2 题：最近的请求次数(力扣对应题号933)
写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：
RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

``示例：``
```

输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3

```
``提示：``
- 1 <= t <= 109
- 保证每次对 ping 调用所使用的 t 值都 严格递增
- 至多调用 ping 方法 104 次

``**********解题**********``

```js
// 思路：1.越早发出的请求越早不在最近3000ms内的请求里。2.满足先进先出，考虑用队列

// 有新请求就入队，3000ms前发出的请求出队。队列的长度就是最近请求次数

var RecentCounter = function() {
    this.q = []; //队列挂载构造函数里，在原型里便可以访问到

};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t); // 入队

    while(this.q[0] < t - 3000){ // 判断数组中第一个值 是否小于当前减去3000 
        this.q.shift(); // 出队
    }
    return this.q.length;  // 返回的长度就是3000ms内请求的次数

};

let recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3

```

### 2.3 前端与队列：JS异步中的任务队列
js中的事件循环-任务队列
1、所有任务都在主线程上执行，形成一个执行栈。
2、主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
3、一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"。那些对应的异步任务，结束等待状态，进入执行栈并开始执行。
4、如果异步任务执行完成后里面还有异步任务，那么主线程不断重复上面的第三步。

异步任务分为 宏任务（macrotask） 与 微任务 (microtask)，不同的API注册的任务会依次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行。
宏任务（macro-task）大概包括：
✧ setTimeout
✧ setInterval
✧ setImmediate （nodejs环境）
✧ script（整体代码）
✧ I/O操作等
✧ DOM事件
微任务（micro-task）大概包括：
✧ process.nextTick（与普通微任务有区别，在微任务队列执行之前执行）
✧ Promise.then/catch/finally
✧ async await

将所有任务看成两个队列：执行队列与事件队列。
执行队列是同步的，事件队列是异步的，宏任务放入事件列表，微任务放入执行队列之后，事件队列之前。
当执行完同步代码之后，就会执行位于执行列表之后的微任务，然后再执行事件列表中的宏任务