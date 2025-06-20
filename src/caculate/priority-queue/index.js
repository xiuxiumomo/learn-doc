/*
 * @Author: xiuxiumomo
 * @Date: 2023-12-27 19:39:12
 * @Last Modified by: xiuxiumomo
 * @Last Modified time: 2023-12-27 20:03:18
 */
//给要插入的元素添加属性
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class PriortyQueue {
  constructor() {
    this.items = [];
  }
  push(element, priority) {
    const queueElement = new QueueElement(element, priority);
    //情况一：队里面没有任何数据
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        //情况二：找到比队里面小的一个，在其前面插入
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      //情况三：没有匹配上任何数据
      if (!added) {
        this.items.push(queueElement);
      }
    }
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
    return JSON.stringify(this.items);
  }
}

const priortyQueue = new PriortyQueue();
priortyQueue.push("aaa", 10);
priortyQueue.push("bbb", 9);
priortyQueue.push("ccc", 100);
priortyQueue.push("ddd", 80);
priortyQueue.push("eee", 1000);
console.log(priortyQueue.toString());
