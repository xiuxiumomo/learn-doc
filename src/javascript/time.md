## 1.时间对象
> JavaScript中的时间是以1970年1月1日00:00:00以来毫秒数来存储的数据类型。格林尼治标准时间(GMT)英国、爱尔兰、冰岛和葡萄牙属于该时区。这个时区与中国北京时间的时差是8个小时，也就是说比北京时间晚8个小时。
~~~js
let d = new Date([params])
//params可以是无参数名字或者"月 日 年 时： 分： 秒" "年月日 时分秒"
//忽略时分秒默认都为0
let d = new Date('2019-12-20')
//一个年月日都为整数
let d = new Date(2019,08,10)
//一个年月日时分秒都为整形
let d = new Date(2019,12,20,10,25,10)
~~~

## 2.Date对象的方法
- set 用于设置Date对象的日期和时间值
- get 用于获取Date对象的日期和时间值
- to  用于返回Date对象的字符串格式值
- parse 和utc用于解析Date字符串

- 秒/分 0~59
- 时： 0~23
- 星期 0-6
- 日期 1-31
- 月份 0-11
- 年份 1900年开始的年数

~~~js
let d = new Date('2019-12-10')
d.getMonth()

//获取今年剩余天数
let d = new Date()
let year = d.getFullYear()
let d2 =  new Date(2019,11,31,23,59,59)
d2.setFullYear(year)
let day= 24*60*60*1000;
let leftTime = Math.round((d2.getTime()-d.getTime())/day)

console.log(leftTime)
~~~

## 3.使用Date对象
### 3.1设置某个时间
~~~
//10天以后
let d = new Date();
d.setDate(d.getDate()+10)
~~~
### 3.2比较某个时间
~~~
let d1 = new Date('2018-10-10)
let d2 = new Date('2019-10-10')
let day = (d2-d1)/(1000* 24*60*60)

~~~
### 3.3 n天后星期几
~~~
function day(num) {
    if(typeof Number(num)==='number') {
        let d1 = new Date();
        let d2 = d1.setDate(d1.getDate()+Number(num));
        let n = new Date(d2).getDay();
        let arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
        return arr[n]
    }
}
~~~
### 3.4 格式化日期

- toDateString() 以特定于实现的格式显示星期几月日年
- toTimeString() 以特定于实现的格式显示时分秒和时区
- toLocaleDateString() 以特定于实现的格式新书星期几月日年
- toLocaleTimeString() 以特定于实现的格式显示时分秒
- toUTCString() 显示完整的utc日期
