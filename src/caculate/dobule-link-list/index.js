class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class DobulyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //添加元素
  append(data) {
    const newEl = new Node(data);
    //插入的是第一个元素
    if (this.length === 0) {
      this.head = newEl;
      this.tail = newEl;
    } else {
      //找到最后一个元素
      this.tail.next = newEl;
      newEl.prev = this.tail;
      this.tail = newEl;
    }
    this.length += 1;
  }
  //插入->前插入
  insert(position, data) {
    const newEl = new Node(data);
    //插入的是第一个元素
    if (this.length === 0) {
      this.head = newEl;
      this.tail = newEl;
    } else {
      //往头加
      if (position == 0) {
        //1.将第一个元素的prev指向新元素
        this.head.prev = newEl;
        //2.将新元素的next指向第一个元素
        newEl.next = this.head;
        //3.将head指向新元素
        this.head = newEl;
      } else if (position === this.length) {
        //找到最后一个元素
        this.tail.next = newEl;
        newEl.prev = this.tail;
        this.tail = newEl;
      } else {
        let current = this.head;
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        //新元素的next指向current
        newEl.next = current;
        //新元素的头指向current的上一个元素
        newEl.prev = current.prev;

        //current的上一个元素的next指向newEL
        current.prev.next = newEl;
        //current的prev指向newEl
        current.prev = newEl;
      }
    }
    this.length += 1;
  }
  //根据位置获取元素
  get(position) {
    //1.边界判断
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head;
    let index = 0;
    //2.递归找下标
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }
  //根据data找索引
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
    return -1;
  }
  //更新某个索引的值
  update(position, data) {
    //1.边界判断
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = data;
    return true;
  }
  //移除指定位置
  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }
    let current = this.head;
    //1.只有一个元素
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      //2.1.删除头部元素
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
        //2.2.删除尾部
      } else if (position === this.length - 1) {
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        // let current = this.head;
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length -= 1;
    return current.data;
  }
  //移除数据
  remove(data) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }
  //默认string
  toString() {
    return this.backwardString();
  }
  //由尾向前tostring
  forwardString() {
    let current = this.tail;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.prev;
    }
    return str;
  }
  //由头向后tostring
  backwardString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    return str;
  }
  //判断是否为空
  isEmpty() {
    return this.length===0
  }
  //获取长度
  size() {
    return this.length;
  }
  //获取第一个元素
  getHead() {
    return this.head.data;
  }
  getTail() {
    return this.tail.data;
  }
}

const dbLink = new DobulyLinkList();
dbLink.append("jack");
dbLink.append("pack");
dbLink.append("mack");
dbLink.append("cack");
console.log(dbLink.getHead());
console.log(dbLink.getTail());
