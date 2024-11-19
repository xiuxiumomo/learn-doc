## 归集常见的手写题目以及原理

## 手写Object.create()

> Object.create(proto,propertiesObject) 静态方法以一个现有对象作为原型，创建一个新对象。proto 新创建对象的原型对象。
> 如如果该参数被指定且不为 undefined，则该传入对象可枚举的自有属性将为新创建的对象添加具有对应属性名称的属性描述符。这些属性对应于 Object.defineProperties() 的第二个参数。


```js

Object.create(proto)
Object.create(proto, propertiesObject)

```

简单的说，就是以传入的对象作为原型，新创建一个对象，如果希望没有原型，直接传入null,这个时候创建的对象往往性能更高 `obj.__prot__=null`

例子：
```js
const a = {
  name: 'jack',
  age: 20
}
const obja = Object.create(a);
obja.age // 20
```

实现过程：✍️
```js
function _create(obj) {
  //创建一个构造函数
  function F() {}
  //构造函数的原型替换成新加入的obj
  F.prototype = obj;
  //返回对象
  return new F();
}


const obja2 = _create(a);
```

实现思路：🤔

- 创建构造函数
- 将构造函数的prototype指向传入的对象
- 通过new新建对象且返回


![思维导图](./_create.png)


## 手写instanceof

instanceof具体介绍在[原型](/src/javascript/prototype/prototype.html)里面已经有具体的介绍了.

手写：
```js
function myInstanceof(obj,Constructor) {
 let left = obj.__ptoto__;
 let right = Constructor.prototype;

 if(left===null) {
    return false
 }
 if(left===right) {
  return true
 }else{
  return myInstanceof(obj.__proto__,Constructor)
 }
 
}
```


## 手写new

new操作符通常用来创建对象，常用类的对象实例化，如：`new Person() new Date()`等等。那么new这个过程发生了什么。

例子
```js
function Person(name,age) {
  this.name = name;
  this.age = age
}
//new实现p对象
const p = new Person();

//new实现d对象
const d = new Date();
```

实现思路：🤔

- 创建一个对象
- 对象的__proto__ 指向构造函数的prototype
- 执行对象函数的方法，且该方法的`this`绑定到新创建的对象上。



实现过程：✍️
```js

function _new(func,...arg) {
  //1.创建一个对象
  const obj = {};
  //2.对象的__proto__ 绑定到构造函数的prototype
  obj.__proto__ = func.prototype;
  //3.执行对象函数的方法，且该方法的`this`绑定到新创建的对象上。
  const res = func.apply(obj,arg);
  //4.注意这里如果有值返回，直接返回对象如下面：

  // function Person(name,age) {
  //   this.name = name;
  //   this.age = age;
  //   return this;
  // }
  //这个时候直接返回对象而不是新创建的对象
  if(typeof res === 'object') {
    return res
  }
  return obj
}


```

使用方法：🦖
```js

function Person(name,age) {
  this.name = name;
  this.age = age;
}



const p = _new(Person,'jack',20)
console.log(p.name) // jack
```

## 手写Promise.all方法

介绍

Promise.all方法用于执行Promise.all队列，如果全部正确那么结果将按照队列顺序返回，如果有一个出错，直接返回出错任务。

列子:🫡
```js

// 定义一些返回 Promise 的函数
function asyncTask(name, delay) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // 随机失败的情况
          if (Math.random() > 1) {
              resolve(`${name} 完成`);
          } else {
              reject(`${name} 失败`);
          }
      }, delay);
  });
}

// 创建一个 Promise 数组
const promises = [
  asyncTask("任务1", 1000),
  asyncTask("任务2", 2000),
  asyncTask("任务3", 1500),
];

// 使用自定义的 myPromiseAll 函数
Promise.all(promises)
  .then(results => {
      console.log("所有任务完成:", results);
  })
  .catch(error => {
      console.error("有任务失败:", error);
  });

  // 有任务失败: 任务1 失败


  // 修改一下方法
function asyncTask(name, delay) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // 随机失败的情况
          if (Math.random() > 0) {
              resolve(`${name} 完成`);
          } else {
              reject(`${name} 失败`);
          }
      }, delay);
  });
}

// [ '任务1 完成', '任务2 完成', '任务3 完成' ]

```

实现思路：🤔

- 定义参数类型为promise数组
- 定义计数器和返回值数组
- 循环参数，每一次在成功的时候累加定时器，当总数=参数长度的时候，将结果resove返回
- 循环的过程中只要有报错，直接返回报错。否则返回成功



实现过程：✍️
```js
function myPromiseAll (promises) {
  //1.判断参数
  if(!Array.isArray(promises)) {
    throw new Error(`params must be arrays`)
  }
  //2.返回promise
  return new Promise((resolve,reject)=> {
    //定义计数器
    let count = 0;
    //定义结果
    let res = [];
    const len = promises.length;
    promises.forEach((promise,i)=>{
      //遍历执行
      Promise.resolve(promise).then((value)=>{
        count+=1;
        res[i] = value;
        //全部成功
        if(count===len) {
          resolve(res)
        }
        //只要有一个错误，直接reject
      }).catch(reject)
    })
  })
}

```

使用方法：🦖

```js

// 定义一些返回 Promise 的函数
function asyncTask(name, delay=1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 随机失败的情况
            if (Math.random() > 0.5) {
                resolve(`${name} 完成`);
            } else {
                reject(`${name} 失败`);
            }
        }, delay);
    });
}

// 创建一个 Promise 数组
const promises = [
    asyncTask("任务1", 1000),
    asyncTask("任务2", 2000),
    asyncTask("任务3", 1500),
];

// 使用自定义的 myPromiseAll 函数
myPromiseAll(promises)
    .then(results => {
      //如果成功返回数组
        console.log("所有任务完成:", results);
    })
    .catch(error => {
      //如果失败，返回失败内容如： `${name} 失败`
        console.error("有任务失败:", error);
    });

```



## debounce方法

> debounce是项目中常见的方法，该方法的作用是减少事件发生的频率，如：输入框查询时候，当检测到输入框在输入的时候不触发，合并到最后一次
> 再去触发

列子:🫡

```js
window.addEventListener('resize',debounce(()=> {
  console.log('正在change')
}))
```

实现思路：🤔
- 参数定义1.要执行的函数 2.延迟时间 (在某个时间范围内，开关是存在的，只有在这个时间外，才去执行)
- 使用闭包的概念设置开关
- 清除前面每一次设置的定时器，只执行最后一次的定时器。

实现过程：✍️
```js
function debounce(fn,delay=500) {
  //1.定义开关
  let timer = null;
  return function(...arg) {
    const that = this;
    //只要触发直接清除
    clearTimeout(timer);
    //创建定时器，定时器将在delayms后触发
    timer = setTimeout(()=>{
      fn.applay(that,arg)
    },delay)
  }
}


```


使用方法：🦖

```js
window.addEventListener('resize',debounce((e)=> console.log('变化了'))

```

```vue
<template>
  <el-input @input="debounce(handlerInput)" v-model="val"></el-input>
</template>
<script>
export default {
  data() {
    return {
      val: ''
    }
  },
  methods: {
    handerInput(val) {
      
    }
  }
}
</script>
```

## throttle  

> throttle  是一种控制函数执行频率的技术，主要用于限制某个函数在一定时间内的调用次数。与debounce不同， throttle在指定的时间间隔内会确保函数至少被调用一次。它通常用于处理高频率的事件，比如滚动、窗口调整大小、鼠标移动等。


注意
`throttle`在指定的时间节点内，能够至少保证执行一次。如： 平均2s内能够执行一次




列子:🫡

```js
window.addEventListener('resize',throttle((e)=> console.log('执行了'))

```

实现思路：🤔
- 定义参数： 1.回调函数 2.时间段内如2000ms
- 设计一个时间戳记录执行时间
- 执行回调方法，更新记录时间


实现过程：✍️
```js
//该方法只要注册上，第一次会立即执行
function throttle(fn, limit = 1000) {
  let time = Date.now();
  return function (...arg) {
    const nows = Date.now();
    const that = this;
    if (nows - time >= limit) {
      fn.apply(that, arg);
      time = nows;
    }
  };
}

//该方法初始化不执行，只有最后一次停下来的时候会执行一次
function throttle(fn,limit=1000) {
  let timer = null;
  return function(...arg) {
    const that = this;
    //只有在没有定时器的情况下生成一个定时器
    if(!timer) {
      timer = setTimeout(()=>{
        //在limt时间内执行一次，然后销毁
        fn.apply(that,arg)
        timer = null;
      },limit)
    }
    //有定时器不做任何事情
  }
}
```


使用方法：🦖



```js
window.addEventListener('resize',throttle((e)=> console.log('变化了'))

```
## 实现获取数据类型

> 首先要明白有多少种数据类型，常见的数据类型请见[基础知识](/src/javascript/base.html)


注意
这里的null比较特殊，使用typeof返回的是object所以要单独处理

列子:🫡


实现思路：🤔
- 处理特殊的null类型
- 使用Object.prototype.toString方法获取所有的类如 `Function` `Date` `Rexp`等因为`typeof value`都是object
- 使用typeof获取基础的数据类型 `number` `string` `undefined`等


实现过程：✍️

```js
function getType(value) {
  if(value===null) return 'null';
 
  if(typeof value==='object') {
     //可能的值
  // [object Array]
  // [object Date]
  // [object RegExp]
  // [object Symbol]
  // [object Function]
  // [object Object]
    const type = Object.prototype.toString.call(value);
    const typenames = type.replace('[object ',"").replace("]","");
    return typenames.toLowerCase()
  }
  return typeof value
  
}
```

使用方法：🦖

```js
function getType(value) {
  if(value===null) return 'null';
 
  if(typeof value==='object') {
     //可能的值
  // [object Array]
  // [object Date]
  // [object RegExp]
  // [object Symbol]
  // [object Function]
  // [object Object]
  // 口诀 ad 躲在 草里r 被蛇 s咬了 （fb）i 来抓蛇
    const type = Object.prototype.toString.call(value);
    const typenames = type.replace('[object ',"").replace("]","");
    return typenames.toLowerCase()
  }
  return typeof value
  
}


// 示例用法
console.log(getType(123)); // "number"
console.log(getType("Hello")); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(null)); // "null"
console.log(getType([])); // "array"
console.log(getType({})); // "object"
console.log(getType(function() {})); // "function"
console.log(getType(Symbol())) //symbol

console.log(getType(undefined)) //undefined
console.log(getType(new Date())) //symbol
console.log(getType(new RegExp())) //regex
console.log(getType(2n)) //bigint
```



## apply实现

> apply，和call,bind是js中function带有的改变this指向的方法。apply和call不同之处在于传参数。

前提
this指向问题是一个老生常谈话题，那么this指向有哪些情况呢
- 非严格模式下this指向全局window
```js
console.log(this)
```
- 普通的函数调用，this指向全局window，严格模式下指向undefined
```js
function showThis() {
  console.log(this)
}
showThis()
```
- 方法调用，如一个对象中有一个方法属性，调用该属性时指向该对象。
```js
const obj =  {
  name: "jack",
  getName: function() {
    return this.name
  }
}
obj.name(); // jack
```

- 构造函数，使用`new`关键词时,`this`指向创建的实例。
```js

function Person(name) {
  this.name = name;
} 
const p = new Person('jack')
p.name; //jack
```

- 箭头函数，箭头函数不创建`this`,它会从外部继承`this`,因此`this`的值取决于上下文
```js

const obj = {
  name: "jack",
  sayName: function() {
    // this的范围是这里
    const fn = ()=> console.log(this.name);
    fn();
  }
}
obj.sayName() //jack
```

- 手动绑定 call() 、 apply()  和  bind()  方法显式地设置  this  的指向。
  
```js
function greet() {
    console.log(this.name);
}

const obj = { name: 'David' };

greet.call(obj); // 输出: "David"
greet.apply(obj); // 输出: "David"

const boundGreet = greet.bind(obj);
boundGreet(); // 输出: "David"
```

口诀

诸葛亮严格构造箭头，草船绑定普通调用  





有了上面的基本this指向情况介绍，我们可以手动实现最后一个里面的apply了

列子:🫡
```js
function greet() {
    console.log(this.name);
}

const obj = { name: 'David' };

greet.apply(obj); // 输出: "David"
```
实现思路：🤔

- 在新对象上创建一个greet方法
- 执行greet方法
- 先对象上销毁greet方法


实现过程：✍️
```js
// 第一步骤
const obj = {
  name: 'David',
  greet: function() {
    console.log(this.name)
  }
}
//第二步
obj.greet();
//第三步
delete obj.greet

//抽象出来在函数的原型上扩展
Function.prototype.myApply = function (obj={}, arg = []) {
  //greet方法本身
  const context = this;
  //为了防止重复，新建的属性名唯一
  const key = Symbol();
  //在对象属性赋值
  obj[key] = context;
  //执行方法
  const res = obj[key](...arg);
  //删除属性
  delete obj[key];
  return res;
};


```



使用方法：🦖
```js
function greet(age,sex) {
  console.log(this.name,age,sex);
}

const obj = { name: "David" };

greet.myApply(obj,[25,'男']); //David 25 男
```


## 手写call方法

> call方法和apply方法思路一致,只是传参不一样。

实现思路：🤔
```js
Function.prototype.myCall = function (obj={}, ...arg) {
  //greet方法本身
  const context = this;
  //为了防止重复，新建的属性名唯一
  const key = Symbol();
  //在对象属性赋值
  obj[key] = context;
  //执行方法
  const res = obj[key](...arg);
  //删除属性
  delete obj[key];
  return res;
};
```

使用方法：🦖

```js
function greet(age,sex) {
  console.log(this.name,age,sex);
}

const obj = { name: "David" };

greet.myCall(obj,25,'男'); //David 25 男
```

## 实现浅拷贝shallowCopy

> 浅拷贝，拷贝的对象或者数组，拷贝的是引用地址，源数据改变拷贝的变量也会改变。
> js中自带的浅拷贝方法如： `...`,`object.assign`等能实现基本的浅拷贝方法。


实现思路：🤔
- 判断是否是数组或者对象
- 使用obj.getOwnProperty判断属性来源是否是自身。


实现过程：✍️
```js
function shallowCopy(obj) {
  if (obj === null || typeof obj !== "object") return;

  const newObj = Array.isArray(obj) ? [] : {};
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      newObj[k] = obj[k];
    }
  }
  return newObj;
}
```
使用方法：🦖

```js
const o = {
  name: 'jack',
  n: {
    m: 20
  }
}
const co = shallowCopy(o)

//co改变了引用地址的值
co.n.m = 30
console.log(o,'o')
console.log(co,'co')


// { name: 'jack', n: { m: 30 } } o
// { name: 'jack', n: { m: 30 } } co
```




## 实现deepCopy方法

> deepCopy方法完全复制出一份obj或者array,修改复制后的方法，源数据不受影响






实现思路：🤔
- 在浅拷贝的基础上采用递归判断


实现过程：✍️

```js

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return nulll;

  const newObj = Array.isArray(obj) ? [] : {};
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      newObj[k] = typeof obj[k] === "object" ?    ;
    }
  }
  return newObj;
}
```


使用方法：🦖

```js

const o = {
  name: "jack",
  n: {
    m: 20,
  },
};
const co = deepCopy(o);

co.n.m = 30;
console.log(o, "o");
console.log(co, "co");

// { name: 'jack', n: { m: 20 } } o
// { name: 'jack', n: { m: 30 } } co

```





## 实现reduce方法
> reduce方法用于累加数据


列子:🫡
```js
const arr = [1,2,3]
const res = arr.reduce((sum,item)=> sum+=item,0)
```


实现思路：🤔

- 采用递归方法从头累加

- 每次递归后采用slice方法将arr去除第一个元素，再次递归


实现过程：✍️
```js
function reduce(arr) {
  if(arr.length===1) return arr[0];
  return arr[0] + reduce(arr.slice(1))
}
```


使用方法：🦖
```js
function reduce(arr) {
  if(arr.length===1) return arr[0]
  return arr[0] + reduce(arr.slice(1))
}

const arr = [1,2,3]
console.log(reduce(arr)) //6
```


## 实现push方法
> push方法是js自带的添加元素的方法

列子:🫡
```js
const arr = [];
arr.push(1,2,3,4)

console.log(arr) // 1,2,3,4
```


实现思路：🤔
- 定义参数arg
- 采用循环的方法，扩展数组的长度

实现过程：✍️
```js
function push(arr, ...arg) {
  for (let i = 0; i < arg.length; i++) {
    //动态的arr.length
    arr[arr.length] = arg[i];
  }
  return arg.length;
}
```

使用方法：🦖

```js
const arr = [];
push(arr, 1, 2, 3, 4);
console.log(arr);

```



## 实现filter方法


实现思路：🤔
- 定义一个数组存储返回值
- 遍历数组，将每一项执行回调函数
- 如果是真，数组加入该项
实现过程：✍️
```js
function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res
}
```
使用方法：🦖

```js
const arr = [1, 2, 3];

const res = filter(arr,(item) => item > 2)
console.log(res)
```





## 实现map方法

列子:🫡
```js
const arr = [1, 2, 3];
const res = arr.map( (item) => item * 2);
console.log(res);

```

实现思路：🤔
- 和filter差不多，只是不需要根据真值判断

实现过程：✍️

```js
function map(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res
}
```
使用方法：🦖

```js

const arr = [1, 2, 3];

const res = map(arr,(item) => item * 2);
console.log(res);

```












<!-- 
列子:🫡
实现思路：🤔
实现过程：✍️
使用方法：🦖 -->