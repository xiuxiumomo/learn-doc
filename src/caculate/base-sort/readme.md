## 冒泡排序
> 冒泡排序的特点： 每一轮的循环找出最大值，放在数组的最后位置。


特点
- 1.每两个相邻的数字作比较，如果前者比后者大，前后两个数字交换位置。
- 2.一轮交换后，最大的数字一定放在了最后右边
- 3.确定好一轮后，继续重复1和2。只不过这一次的length-1

注意
在1中，i的最大值必须比最大的索引length-1还要少1
```
//第一层的循环
for(let i=0;i<length-1;i++) {
  //如果前者比后者大，交换位置

  if(this.items[i]>this.items[i+1]) {
    this.swap(i,i+1)
  }
}
//第二次循环
i < length - 1 -1

//第三次循环 
i < length - 1 -1 -1

//使用逆序
for(let j=length-1;j>=0;j--) {
  for(let i=0;i<j;i++) {
  //如果前者比后者大，交换位置

  if(this.items[i]>this.items[i+1]) {
    this.swap(i,i+1)
  }
}
}



//交换数据的逻辑，引入临时变量
swap(m,n) {
  let temp = m;
  m = n;
  n = temp;
}
```