## 数字
> 前言在JavaScript中数字为双精度浮点型`-(2^53-1)`到`(2^53-1)`数字类型也可能是以下三种符号值:
- +Infinity 正无穷
- -Infinity 负无穷
- NaN 非数字
## 1.数字对象

- Number.MAX_VALUE 可表示的最大值
- Number.MIN_VALUE 可表示的最小值
- Number.NaN 特指非数字
- Number.NEGATIVE_INFINITY 负无穷
- Number.POSITIVE_INFINITY 正无穷
- Number.EPSILON 表示1和比最接近1且大于1的最小Number之间的差别
- Number.MIN_SAFE_INTEGER 最小安全数
- Number.MAX_SAFE_INTEGER 最大安全数

以上属性均不可写不可枚举不可配置
大于Number.MAX_VALUE 用 Infinity表示


## 2.数字方法
- Number.parseFloat() 把字符串解析成浮点数
- Number.parseInt() 把字符串转变成整数
- Number.isFinite() 判断传值是否是有限字数
- Number.isInteger() 判断传值是否是整数
- Number.isSafeInteger() 判断传值是否是安全数字

~~~js
let a1 = 12.123 let a2 = '12.123';
Number.parseFloat(a1) //12.123
Number.parseFloat(a2) //12.123

let a1 = 110;
Number.parseInt(a1,10) // 110
Number.parseInt(a1,2) //6

Number.isInfinite(Infinity) //false
Number.isInfinite(-Infinity) //false
Number.isInfinite(NaN) //false
Number.isInfinite('111') //false
Number.isInfinite(11) //true 


Number.isInteger(1) //true
Number.isInteger(1.1) //false

Number.isNaN(NaN) //true
Number.isNaN('asd') //false

Number.isSafeInteger(1) true
~~~

## 3.数学对象
js内置对象Math，这里的Math对象中的三角函数都是弧度制的

- abs() 绝对值
- sin() cos() tan() 三角函数
- asin() acos() atan() 反三角函数
- floor() ceil() 最小或最大的整数
- min() max() 最小值最大值
- random() [0,1) 之间的随机数
- round() fround() trunc() 四舍五入
- sqrt() cbrt() hypot() 平方根立方根

