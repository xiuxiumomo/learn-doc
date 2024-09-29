## 流程控制和错误处理
### 1.块级作用域
ES5没有块级作用域得说法
```js
ES5
var a = 1;
{
    var a = 2
}
a //2

ES6
let a = 1

{
    let a = 2
 
}
a //1

```
### 2.条件判断语句
用于根据条件返回结果
- if ... else
- switch
### 2.1 if语句
if else 语句是常用得一种重要的条件判断。在js中false的等效值有。
- false
- undefined
- null 
- 0
- NAN
- ''(空字符串)
```js
if(condition) {
    //do sth 避免在此处写return
}else{
    //do sth
}

//特别注意
let a = {}
a == false //false
a == true //false //这里是永假的

if(a) {
    //a这里是永真
    
    
}

```
### 2.2 switch语句
```js
let a = 'a'
switch(a) {
    case 'a': 
        console.log(111)
        break;
        
    default:
        console.log('nothing')
        break;    
}
```

### 3.异常处理
> 当throw语句抛出错误的时候，可以用try...catch捕获并处理
- throw 语句：抛出异常，后面可以是任何表达式
```js
throw 'wrong!!!'
throw 404
throw {msg: 'err'}
```
- try ... catch语句捕捉错误
```js
function fn() {
    throw 'err'
}
try {
    fn()
}catch(err) {
    console.log(err) //捕捉 err
}finally {
    //do sth
}

try...catch 经常用于网络请求的情况下
function getData() {
    try {
        let res = fetch()
    }catch(err) {
        console.log(err)
    }
}
```


