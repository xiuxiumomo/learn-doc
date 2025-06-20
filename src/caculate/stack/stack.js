/*
 * @Author: xiuxiumomo 
 * @Date: 2023-12-26 20:10:39 
 * @Last Modified by: xiuxiumomo
 * @Last Modified time: 2023-12-26 20:16:07
 * @description: 栈，后进先出，数据只能从尾部弹出
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  pick() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  //打印当前数据
  toString() {
    return this.items.join(" ")
  }
}
const stack = new Stack();

// 100/2  0  //底
// 50/2   0
// 25/2   1
// 12/2   0
// 6/2    0
// 3/2    1
// 1/2    1  //顶
// 0      不能

//1100100
function h2bin(num) {
  // 确定终止条件必须大于0
  while (num > 0) {
    //将每一次的余数压入栈底
    stack.push(num % 2);
    //当前num变为上一次的结果
    num = Math.floor(num / 2);
  }
  let str = "";
  while (!stack.isEmpty()) {
    str += stack.pop();
  }
  return str;
}
const r = h2bin(100);
console.log(r);
