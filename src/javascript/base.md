## Javascript的语法和数据类型
### 1.注释
~~~
//单行注释
/*
多行注释
*/
~~~
### 2.声明

Javascript的三种声明方式
- var 声明一个变量，可赋一个初始值
- let 声明一个块作用域的局部变量，可赋一个初始值
- const 声明一个块作用域的只读命名的常量

~~~
 let var 当没有赋初始值时，默认会添加undefined
 而 const a 会出现无效的引用Uncaught SyntaxError
 let a //undefined
 var a //undefined
 const a //Uncaught SyntaxError
 
 //检测undefined 和 null
 Number()方法去验证 undefined 返回NAN null返回0
~~~

### 2.1全局和局部的概念
- 全局变量：即声明在函数之外，当前文档所有地方都可以访问；
- 局部遍历：即声明在函数内部，仅在当前函数内可以访问；

ES6之前，并没有块级作用域概念且只能用var声明变量

~~~
if(true) {
    var a = 1
}
console.log(a) 1
if(true) {
    let a = 1
}
console.log(a) //Uncaught SyntaxError
~~~
### 2.2变量提升函数提升的概念
ES6之前存在变量提升的概念
~~~
console.log(b) //undefined
var b = 1
console.log(b) //1

console.log(b) //Uncaught SyntaxError
let b =1
console.log(b) 1

//函数声明和函数表达式声明
getA() //正常
function getA() {}


getA() //Uncaught SyntaxError
var g = function() {}
~~~
### 2.3全局变量
- ES5中顶层对象的属性等价于全局变量(浏览器window,Node中式global)
- ES6 var function 声明依旧为顶层对象的属性，但是let/const/class 声明的全局变量不属于顶层对象，ES6中全局变量和顶层对象的属性是分开的。

~~~
//ES5
var a = 'aaa'
window.a // aaa

//ES6 
let b = 'aaa'
window.b //undefined
~~~

### 2.4.常量
ES6之后我们可以使用const来声明一个只读常量，并且在声明时必须赋值，之后在相同的作用域不能赋值也不能重新声明否则会报错。

~~~
const a //Uncaught SyntaxError
const b ='aaa'
b = 'ccc' //Uncaught TypeError
~~~
尽管const不能修改值，但是对于对象和数组却能修改属性
~~~
const a = {name:'lee',age: 20}
a.age = 30
console.log(a) // {name: 'lee',age: 30}
~~~

### 3.数据结构和数据类型
JavaScript总共有7种的数据类型
- 6种原型数据类型
  - 1.Boolean
  - 2.null
  - 3.undefined
  - 4.Number
  - 5.String
  - 6.Symbol (ES6唯一且不可变的数据)
- Object对象类型
  - 1.Obejct
  
### 3.1.数据类型转换  
~~~
let a ='1'
let b = 2
a+b //12

转换小技巧
+a++b //3

~~~
### 4.字面量
> 字面量是用来表示如何表达这个值，简单理解就是变量赋值时右边的都是字面量。
- 1.数组字面量
- 2.布尔字面量
- 3.浮点数字面量
- 4.整数字面量
- 5.对象字面量
- 6.正则字面量
- 7.字符串字面量
~~~
let a= 1 //右边都是字面量
let a= [1,,3]
//使用，会默认赋值为undefined并且会计算长度
~~~
### 5.检测数据类型可靠函数
~~~
export function(params) {
     let res =  Object.prototype.toString.call(params);
     return res;
    <!-- toString.call('foo');     // "[object String]"
    toString.call([1, 2]);    // "[object Array]"
    toString.call(3);         // "[object Number]"
    toString.call(true);      // "[object Boolean]"
    toString.call(undefined); // "[object Undefined]"
    toString.call(null);      // "[object Null]" -->
}
~~~


