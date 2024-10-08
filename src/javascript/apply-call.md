## call,apply,bind 等使用说明书

> 这三个是方法中常见的对象冒充，再 js 中有着非常重要的作用。

### 1.call A.call(B,arg1,arg2)

> call 方法第一个参数是必选，当传入的是 null,undefined 时候指向 window，后面的依次是参数

### 2.apply A.apply(B,[a,b])

> call 方法第一个参数是必选，当传入的是 null,undefined 时候指向 window，参数是以数组的形式传入的。

### 3.bind 不执行函数仅改变 this 的指向

```
var name = '张三'
var obj = {
    name: '李四'
}
var foo = function () {
    return this.name
}.bind(obj)
foo() // 李四

```

### 4.实现简单的 call 和 apply 方法

> 原理，在新的对象中创建一个函数对象 fn: ()=>{ return this.name} 执行该函数后，删除该函数属性

```

Function.prototype.myCall=function (obj) {
    var obj = obj || window
    obj.fn  = this; //新建一个fn
    let args = [...arguments].splice(1) //第一个参数是obj
    let res = obj.fn(...args)
    delete obj.fn
    return res

}
Function.prototype.myApply = function(obj) {
    var obj = obj || window
    obj.fn = this;
    let args = arguments[1] //第一个参数是obj 第二个参数是数组
    let res
    if(args){
        res = obj.fn(...args)
    }else{
        res = obj.fn()
    }
    return res
}
let obj = {
    name: '张三'
}
let name = 'aaa'

function getA() {
    return this.name

}
let res = getA.myApply(obj)

```

```
var foo = {
    value: 1
}
functin bar() {
    console.log(this.value)
}

bar.call(foo)
//call改变了this的指向，指向到foo 调用了bar函数
//模拟
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
}
foo.bar()
//第一步 foo.fn = bar
//第二部 foo.fn()
//第三步 delete foo.fn

Function.prototype.myCall = function(context) {
    context.fn = this;
    context.fn()
    delete context.fn
}
var foo = {
    value: 1
}
function bar() {
    console.log(this.value)
}
bar.myCall(foo)

```


