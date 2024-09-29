## 表达式和运算符
- 赋值运算
- 比较运算
- 算数运算
- 为运算
- 逻辑运算
- 字符串运算
- 条件运算
- 逗号运算
- 一元运算
- 关系运算

### 1.赋值运算
```js
x = y
x+=y x = x + y
x-=y x = x - y
x*=y x = x * y
x/=y x = x / y
x%=y x = x % y

E//S6中解构运算
let [a1,a2] = [1,2]
// a1 =1 a2 = 2
```

### 2.比较运算
```js
1 == '1' //true 
1 !== '1' //true
1 === '1'  // false
1 > 2 //false
1 < 2 //true
1 <= 2 //true
1> =2  //false

```
### 3.算数运算


- % 求余
- ++ ++N返回加一以后的值，N++返回原来的值然后加一
- -- 自减同上    

~~~js
11 % 5 = 1
~~~
### 4.位运算
### 5.逻辑运算
```js
&& || ！
```
### 6.字符串运算符
~~~js
let a= '111a';
let b = '222b';
a+=b;
~~~
### 7.三元运算
~~~js
let a= 10;
let b = a>20? 1: 2
~~~
### 8.逗号运算
对两个操作数求值并且返回最终操作数的值，通常用于 for循环中，在每次循环时对多个变量进行
### 9.一元运算
一元操作符仅对应一个操作数
- delete 删除一个对象的属性或数组某个key值返回true or false
- typeof 返回一个参数的类型字符串值
- void   表示一个运算没有返回值，常常用在创建一个超链接文本，但是点击的时候没有任何效果

```js
let a= {name: 'aa',age: 20}
delete a.name

let b = [1,2,3]
delete b[0] // [empty,2,3]
b[0] undefined
 
typeof 'aaa' //string
typeof true //Boolean
typeof null //'object'
typeof undefined //undefined


```

### 10.关系运算
- in 判断指定属性是否在指定对象中，若是返回true
```js
let a = {name: 'lee',age: 20}
let b = [1,2,3]
'lee' in a
0 in b 
```

- instanceof 判断一个对象是否是指定类型，若是返回true
```js
let d = new Date()
d instanceof Date true
```
### 11.运算符的优先级
```js
- .[]()
- ++ -- ~ ! delete
- * / %
- + -
```
### 关于 && 运算符的思考
> 与运算符 二者必须是真才返回真,但是当在表达式中，返回值是不同的， a && b,当a是真值时，不管b真与假都返回b,当a是假值时，都返回a。 

```js
if(1 && 2) {
  console.log('true')
}

let a = 1 && 2;
//a 2
let a = 1 && 0;
//a 0
let c = 0 && 2;
//c 0

```

### && 与 || 使用技巧

```js
let a = 5 && 4; //返回4 <img src="item && item.src"/>
let b = 0 && 4; //返回0
let c = 5 || 4; //返回5
let d = 0 || 4; //返回4 let name = item.name || 'jack'

```

**注意** 

|| 见真则真  & 见假则假

-  && （逻辑与）：如果第一个操作数为假值（falsy），则返回第一个操作数；否则返回第二个操作数。 
 
-  || （逻辑或）：如果第一个操作数为真值（truthy），则返回第一个操作数；否则返回第二个操作数。 


