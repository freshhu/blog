
# 七、 JS防抖、节流及应用
### 1、基本概念
`函数防抖`：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

`函数节流`：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

### 2、函数防抖

函数防抖只是在最后一次事件后才触发一次函数。

![](/blog/images/basics/js/base-seven-img1.gif)

上图中可以看出：如果我在触发事件后的 1 秒内又触发了事件，则会重新计算函数执行时间,1秒后才执行。

#### 2.1应用场景

1.search搜索联想，用户在不断输入值时，用防抖来节约请求资源。

2.window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

#### 2.2代码实现

```html
函数防抖:
<body>
    <div id="btn">点击</div>
    <script>
        let $ = document.querySelector.bind(document);

        /**
        * underscore 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
        *
        * @param  {function} func        回调函数
        * @param  {number}   wait        表示时间窗口的间隔
        * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
        * @return {function}             返回客户调用函数
        */
        var debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result;

            var later = function() {
            // 现在和上一次时间戳比较
            var last = Date.now() - timestamp;
            // 如果当前间隔时间少于设定时间且大于0就重新设置定时器
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                // 否则的话就是时间到了执行回调函数
                timeout = null;
                if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
                }
            }
            };

            var debounced = function() {
                context = this;
                args = arguments;
                // 获得时间戳
                timestamp = Date.now();
                // 如果定时器不存在且立即执行函数
                var callNow = immediate && !timeout;
                // 如果定时器不存在就创建一个
                if (!timeout) timeout = setTimeout(later, wait);
                if (callNow) {
                    // 如果需要立即执行函数的话 通过 apply 执行
                    result = func.apply(context, args);
                    context = args = null;
                }

                return result;
            };

            debounced.cancel = function() {
                clearTimeout(timeout);
                timeout = null;
            };

            return debounced

        };

        function logger(){
            console.log('logger')
        }
        //第三个参数表示首次先触发一下
        $('#btn').addEventListener('click',debounce(logger,1000,true))
    </script>
</body>

```



### 3、函数节流
函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。

![](/blog/images/basics/js/base-seven-img2.gif)

从上图中可以看出：在持续触发事件的过程中，函数不会立即执行，并且每 1s 执行一次，在停止触发事件后，函数还会再执行一次。

#### 3.1应用场景

1.鼠标不断点击触发，mousedown(单位时间内只触发一次)

2.监听滚动事件，比如是否滑到底部自动加载更多，用节流来判断

#### 3.2代码实现

```html
函数节流：
 <body>
    <!-- 节流-我们快速点击 我可以配置1s内的点击算一次 -->
    <button id="btn">快速点击</button>
    <script>
        let $ = document.querySelector.bind(document);
          /**
            * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
            *
            * @param  {function}   func      回调函数
            * @param  {number}     wait      表示时间窗口的间隔
            * @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
            *                                如果想忽略结尾函数的调用，传入{trailing: false}
            *                                两者不能共存，否则函数不能执行
            * @return {function}             返回客户调用函数   
            */
        function throttle(func, wait, options) {
            var context, args, result;
            var timeout = null;
            // 之前的时间戳
            var previous = 0;
            // 如果 options 没传则设为空对象
            if (!options) options = {};
            // 定时器回调函数
            var later = function() {
            // 如果设置了 leading，就将 previous 设为 0
            // 用于下面函数的第一个 if 判断
            previous = options.leading === false ? 0 : Date.now();
            // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
            };
            var throttled = function() {
                // 获得当前时间戳
                var now = Date.now();
                // 首次进入前者肯定为 true
                // 如果需要第一次不执行函数
                // 就将上次时间戳设为当前的
                // 这样在接下来计算 remaining 的值时会大于0
                if (!previous && options.leading === false) previous = now;
                // 计算剩余时间
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                // 如果当前调用已经大于上次调用时间 + wait
                // 或者用户手动调了时间
                // 如果设置了 trailing，只会进入这个条件
                // 如果没有设置 leading，那么第一次会进入这个条件
                // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
                // 其实还是会进入的，因为定时器的延时
                // 并不是准确的时间，很可能你设置了2秒
                // 但是他需要2.2秒才触发，这时候就会进入这个条件
                if (remaining <= 0 || remaining > wait) {
                    // 如果存在定时器就清理掉否则会调用二次回调
                    if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    // 判断是否设置了定时器和 trailing
                    // 没有的话就开启一个定时器
                    // 并且不能不能同时设置 leading 和 trailing
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
            throttled.cancel = function() {
                clearTimeout(timeout);
                previous = 0;
                timeout = context = args = null;
            };
            return throttled;
        };
        // 使用
        function logger(){
            console.log('logger')
        }
        $('#btn').addEventListener('click',throttle(logger,2000))
    </script>
</body>

```

