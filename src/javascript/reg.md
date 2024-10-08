## 正则表达式的基础知识以及用法
### 1.创建正则表达式
~~~
let reg = new RegExp('abc')
//或者
let reg = /'abc'/
~~~
### 2.表达式的第二个参数
- lastIndex 下一个匹配的索引(仅在使用g参数时可用) 
- source 模式文本
- ignore 即'i' 是否忽略大小写
- global 即'g' 是否开启全局匹配
- multiline 即'm'是否开启多行


~~~
let reg = new RegExp('abc','g')
let reg = /'abc'/g
~~~

### 3.使用正则表达式
- RegExp对象的exec和test()方法
- String字符串的match()、replace()、search()、split()方法

### 3.1.RegExp的方法使用
- exec()返回找到的值，并返回其位置信息数组。
- test() 返回true or false
~~~
let str = 'abc eaf'
let reg = new RegExp('abc','g')
let res =  reg.exec(str)
//[ "abc",
  groups: undefined,
  index: 4,
  input: "www.abc.abc"]
  
reg.test(str) //true
  
~~~
### 3.2.String的方法使用
- search() 返回第一个匹配到的索引。
- match() 返回一个数组，元素是匹配到的值。
- replace() 返回一个新的字符串(替换后的)。
- split() 把字符串分割为字符串数组。

~~~
let str = 'www.abc.abc';
let reg = /abc/g
let res = str.search(reg) //4
let res = str.match(reg) // ['abc','abc']
let res = str.replace(reg,'d') //www.d.d
let res = str.split(reg) // ['www.','.',""]
console.log(res)
~~~

### 4.表达式符号介绍
- 主要是 igm 和方括号
### 4.1.字母igm
- i g m
~~~
let str = 'abcd'
let reg = /Abc/i
res.test(str) //true
~~~
### 4.2.表达式
- [abc] 查找这个区间的值(给定区间)
- [^abc] 查找不在这个区间的
- [0-9] 查找0-9之间的数字
- [a-z] 查找a-z区间的小写
- [A-Z] 查找A-Z区间的大写
- [A-z] 查找A-z区间
### 4.3.元字符
- . 查找单个字符，除了换行和行结束符
- \w 查找单词字符 (a-z、A-Z、0-9 以及_)
- \W 查找非单词字符
- \d 查找数字
- \D 查找非数字
- \s 查找空格
- \S 查找非空格
- \n 查找换行符
- \uxxxx 查找unicode字符

~~~
let str = 'abcd'
let reg = /\w/g
let res = str.match(reg) // [a,b,c,d]
~~~
### 4.4.量词
- n+ 任何包含至少一个n的字符串
- n* 任何包含至少零个或多个n的字符串
- n? 任何包含至少零个或一个n的字符串

- n{X} 包含x个n的序列
- n{X,Y} 包含至少x之多y的序列
- ^n 匹配以n开头
- n$ 以结尾

~~~
let str = 'wwwa.a2cddddd.af';
let reg = /a\w?/g  //['a','a2','af']
let reg = /a\w*/g  //['a',a2ddddd','af']
let reg = /a\w+/g  //['a2ddddd','af']

let res = str.match(reg)

~~~

### 5.常用的正则
~~~

//金额保留小数两位
let reg = /((^[1-9]\d*)|^0)(\.\d{0,2})?$/
//电话号码
let reg = /^1[3,4,5,7,8,9]\d{9}$/
~~~



