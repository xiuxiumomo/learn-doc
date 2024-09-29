### 1.函数

函数的两种声明方式：函数声明和表达式声明

```js
function Fn() {}
var fn = function() {}
```

### 2.函数调用

函数定义完成之后不会自动执行，需要我们通过函数名称来调用，才能真正的执行。

```js
var f = function() {
    return 1
}
f()
```

函数的递归调用 5!

```js
function fn(n) {
    if(n==0||n==1) {
        return 1
    }else{
        return n* f(n-1)
    }
}

function fn(n) {
    return (n==1||n==0) ? 1: n*fn(n-1);
}
```

### 3.函数的作用域

> 函数的内部定义的变量，函数的外部不能引用，函数的内部就是这个函数的作用域。当函数内部还定义了一个子函数，那么子函数有权访父级函数的作用域。

```js
var a = 1,b=2;
function fn() {
    return a+b;
}

function fn() {
    const a = 'a',b='b';
    //把Fb看做是一种特殊的变量
    const Fb = function() {
      return a+b
    }
    return Fb()
}
//fn()
```

#### 3.1 闭包

> 内部函数能访问外部函数的作用域。

- 1.内部函数只能在外部函数中访问
- 2.内部函数形成闭包：可以访问外部函数的参数和变量，但外部函数却不能使用这个内部函数的参数和变量。
- 3.闭包的作用，将某个不变的变量的值存起来。

```js
function wrapFn(num) {
  let _num = num || 0;
  //将_num值存起来
  const innerFn = function(num2) {
    return _num+num2
  }
  return innerFn
}
const innerFn = wrapFn(100)
const innerFn2 = innerFn(10)
const innerFn3 = innerFn(20)
console.log(innerFn2,innerFn3)
```

另外，闭包还有复杂的用法

```js
var f = function(name) {
    var age;
    return {
        setName: function(data) {
            name = data
        },
        getName: function() {
            return name
        },
        setAge: function() {
            return age;
        },
        getAge: function(data) {
            age = data;
        }

    }
}
let obj = f('jack')
obj.setName('jack,lee')
obj.setAge(20)

obj.getName() //jack,lee
obj.getAge() //20
```

### 3.2.命名冲突

在同一个闭包作用域下若干参数或变量名相同，产生冲突，则优先使用作用域最近的：

```js
function f() {
    var a = 1;
    function g(a) {
        return a+1;
    }
    return g
}
f()(3) //4
```

### 4.arguments 对象

函数的实际参数会被保存在一个类数组对象 arguments 对象中，通过索引访问具体的参数。

```js
function f(s) {
    var text = '';
    for(var i=0;i<=arguments.length;i++) {
        text+=arguments[i] +s;
    }
    return text;
}
```

### 5.函数参数

ES6 开始，新增两个类型的参数：默认参数和剩余参数

### 5.1 默认参数

```js
function f(a,b) {
    b =b?b:1
    return a*b;
}
//ES6
function f(a,b=1) {
    return a*b;
}

```

### 5.2 剩余参数

```js
function f(a,...b) {
}
f(1,232,2,1,3)
```


