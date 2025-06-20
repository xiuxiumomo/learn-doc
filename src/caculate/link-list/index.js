class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //添加数据
  append(data) {
    const newEl = new Node(data);
    if (this.length === 0) {
      this.head = newEl;
    } else {
      // 创建一个“分身”，分身从位置0开始滑动
      let current = this.head;
      // 如果当前位置有下一个
      while (current.next) {
        //分身向后位移
        current = current.next;
      }
      current.next = newEl;
    }
    this.length += 1;
  }
  //根据位置获取数据
  get(position) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head; //初始点数据
    let index = 0; //初始点索引
    while (index < position) {
      // 不看while循环，直接就是索引点
      current = current.next;
      index++;
    }

    return current.data; // 不看while循环直接就是起点，看while循环就是跳出点
  }
  //查找元素所在位置没找到返回-1
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data == data) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
    return -1;
  }
  //打印数据
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    return str;
  }
  //更新数据
  update(position, data) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head;
    let index = 0;
    //没找到
    while (index < position) {
      current = current.next;
      index++;
    }
    // 和get的逻辑是一样的
    current.data = data;
    return true;
  }
  //注意这个是前插入 a c b 将c 插入到b的前面
  insert(position, data) {
    if (position < 0 || position > this.length) return false;
    const newNode = new Node(data);
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      //指针的前一个指针
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        //移动指针
        current = current.next;
        index++;
      }
      //index=position跳出指针
      prev.next = newNode;
      newNode.next = current;
    }
    this.length += 1;
    return true;
  }

  //根据位置删除,返回被删除的数据
  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }
    
    let current = this.head;
    if (position == 0) {
      this.head = this.head.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      //2.找到后直接将prev指向curent的下一个元素
      prev.next = current.next;
    }
    this.length -= 1;
   
    return current.data;
  }
  //根据数据删除
  remove(data) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }
  //判断是否为空
  isEmpty() {
    return this.length === 0;
  }
  //获取长度
  size() {
    return this.length;
  }
}
const link = new LinkList();
export default link;
