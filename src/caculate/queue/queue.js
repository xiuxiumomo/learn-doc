/*
 * @Author: xiuxiumomo
 * @Date: 2023-12-26 20:10:39
 * @Last Modified by: xiuxiumomo
 * @Last Modified time: 2023-12-26 20:56:15
 * @description: 队列的特点先进先出（first in first out），只能从尾部进入数据，头部出数据
 */

//       -  -  -
// 《-   1 100  10  《- 尾部插入
class Queue {
  constructor() {
    this.items = [];
  }
  //尾部插入队列
  push(element) {
    this.items.push(element);
  }
  //头部删除队列
  del() {
    return this.items.shift();
  }
  //获取队列头部
  pick() {
    return this.items[0];
  }
  //判断队列是否为空
  isEmpty() {
    return this.items.legth === 0;
  }
  //队列长度
  size() {
    return this.items.length;
  }
  //打印当前数据
  toString() {
    return this.items.join(" ");
  }
}

//击鼓报数游戏： 一些人围成一个圈，从每个人从1开始喊，第二个依次加1当报到的数字和num一样的时候，该人被淘汰。该人后面的人从1开始继续喊，直到只剩下一人。
function numGame(nameList, num) {
  const queue = new Queue();
  //将同学加入游戏
  for (let i = 0; i < nameList.length; i++) {
    queue.push(nameList[i]);
  }
  //只要人数比1大，游戏不能停
  while (queue.size() > 1) {
    //只要是小于num的人全部重新加入到队列尾部
    for (let i = 0; i < num - 1; i++) {
      queue.push(queue.del());
    }
    //刚好等于num的直接淘汰
    queue.del();
  }
  const winer = queue.pick();
  return winer;
}
const r = numGame(["a", "b", "c", "d", "e","f"], 3);
console.log(r);
