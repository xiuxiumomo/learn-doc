## map和set
> Map和Set对象是在ES6中被引入的，作为一种由 key值标记的数据容器。Map和Set对象承载的数据元素可以按照插入时的顺序，被迭代遍历。

### 1.Set对象 是一个类
> Set数据结构类似数组，但所有成员的值唯一。Set本身为一个构造函数，用来生成 Set数据结构，使用 add方法来添加新成员。注意:数组的成员唯一并不包含对象数组也就是说[{name:'jack'},{name:'jack'}] 无法去重。
 
~~~
let a = new Set([1,2,3,4,3])
[...a]
//去重
[...new Set([1,2,2,1,3])]
//注意 5 和 '5' 是两个不同的值
~~~
### 1.1属性和方法
- a.size 返回成员的总数
- a.constructor 构造函数
- add(value) 添加项
- delete(value) 删除项 返回布尔值
- has(value) 是否含有某项 返回布尔值
- clear() 清除所有项

~~~
let a = new Set()
a.add(1).add(2)
a.has(1)
a.delete(2)
a.clear()

~~~

### 1.2Set的应用
~~~
//去重
[...new Set([1,1,2,3])]

Array.from(new Set([1,1,2,3]))
//遍历和过滤

let b = new Set([...].map((x)=>{return x*2}))

//并集，交集，差集

let a= new Set([1,2,3])
let b = new Set([3,4,5])
//并集
let c = new Set([...a,...b]) //[1,2,3,4,5]
//交集
let d = new Set([...a].filter((x)=>{return b.has(x)}) [3]
//差集
let e = new Set([...a].filter((x)=>{return !b.has(x)})) [1,2,4,5]
~~~

### 1.3遍历方法
- keys() 
- values()
- entries() 
- forEach()

### 2.Map对象
> 由于传统的 JavaScript对象只能用字符串当做键，给开发带来很大限制，ES6增加 Map数据结构，使得各种类型的值(包括对象)都可以作为键。\
~~~
let a = new Map()
let b = {name: 'jack'}
a.set(b,'myName') //对象当key值
a.get(b)
~~~
将map结构转成数组结构
~~~
let b = new Map()
b.set('a','1234')
b.set('b','asd')
let a = [...a.keys()]
~~~


