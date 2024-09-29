## 循环和迭代
### 1.循环语句的几种类型
- for语句
- do...while语句
- while语句
- labeled语句
- break语句
- continue语句
- for...in语句
- for...of语句

### 1.1.for语句
重复执行条件语句，直到循环条件为false退出循环

```js
var a = 1;
for(var i=0;i<3;i++){
    a++
}
console.log(a,i)

原理
var i
for(i=0;i<3;i++) {

}
//当i不满足循环条件时停止，否则进入循环
```
### 1.2.do...while语句
重复do条件，直到不符合while条件，退出循环
```js
var a=1 
do{
    a+=1;
}wihle (a<5);

```
### 1.3.while语句
重复执行 while的条件，直到 while的条件为 false，退出循环：
```js
var a =0;
var b =0;
while(a<5) {
    a++;
    b+=a;
}
// a 5 b 15
```

### 1.4.labeled语句
用来标识一个程序位置的标识符，如标识一个循环，并在break或continue中指出标识符，则停止循环

```js
var a = [1,2,3,4,5]
labelName:
for(var i=0;i<a.length;i++) {
    console.log(i)
    if(i>1) {
        break labelName;
    }
}
```

### 1.5.break语句
- 终止一个循环
- 终止一个label
```js
for(var i=0;i<5;i++) {
    if(i==2) {
        break;
    }
}

lee:
for(var i=0;i<5;i++) {
    if(i==2) {
        break lee;
    }
}
```

### 1.6.continue语句
用来跳过当前循环，进入下个循环，可以使用在 while、 do...while、 for或者 label语句：
```js
var a=0;
var b=0;
while(a<5) {
    a++;
    if(a==2) {
        continue;
    }
    b+=a;
}
//a 5 b//13
```

### 1.7.for..in循环

用于遍历一个对象（或数组） **可枚举** 的属性key值
```js
let obj = {
  name: "jack",
  age: 20
}
Object.prototype.pack="pack"

for(let k in obj) {
  console.log(k) // name age pack 继承的pack也会被打印出来
}


for(let k in obj) {
  if(Object.hasOwn(obj,k)) {
    console.log(k) // name age 只打印自身上的属性
  }
}
```
### 1.8.for...of语句
通常用于遍历一个可迭代 **类数组对象**(包括Array,Map,Set和参数对象arguments等)返回的每一项都是值

```js
//迭代array
let obj = ['name','age']
Array.prototype.pack="pack"

for(let v of obj) {
  console.log(v) // name age 
}

//迭代字符串
const str = "love"

for(let v of str) {
  console.log(v) //  l o v e
}

//迭代Map

const map = new Map()
 
map.set('name','jack');
map.set('age',20)

for(let v of map) {
  console.log(v) // [ 'name', 'jack' ] [ 'age', 20 ]

}

const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value); // 1 2 3
}


//迭代参数

function foo() {
  for (const value of arguments) {
    console.log(value); // 1 2 3
  }
}
foo(1, 2, 3);


//迭代类数组

const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```


### 1.9 for...of 与 for...in 之间的区别
- 1.for in 迭代的是对象的可枚举的属性字符串，而for of 迭代的是类数组的值

### 2.0 可枚举属性和不可枚举属性
>在 JavaScript 中，可枚举属性是指对象中可以被  for...in  循环或  Object.keys()  方法遍历的属性。可枚举性是对象属性的一个特性，决定了该属性是否会出现在循环中。 
 
#### 1. 可枚举属性的定义 
 
每个对象都有一个属性描述符（property descriptor），其中包含了多个特性，包括： 
 
-  value ：属性的值。 
-  writable ：一个布尔值，表示属性值是否可以被改变。 
-  enumerable ：一个布尔值，表示属性是否可枚举。 
-  configurable ：一个布尔值，表示属性是否可以被删除或修改其特性。 
 
当  enumerable  属性为  true  时，该属性就是可枚举的；当为  false  时，该属性不可枚举。 

#### 2. 创建可枚举属性 

```js
const obj = {};

Object.defineProperty(obj, 'nonEnumerableProp', {
  value: 'I am non-enumerable',
  enumerable: false, // 设置为不可枚举
});


```

#### 3.默认行为
使用字面量创建的对象，默认定义的属性都是可枚举的。
```js
const obj = {
  name: "1",
  age: 20
}
```

#### 4.不可枚举的属性

javascript中常见的不可枚举的属性如Array.prototype中的length默认不可见

```js
const arr = [1, 2, 3];
console.log(Object.keys(arr)); // ['0', '1', '2']
console.log(arr.length); // 3

```
