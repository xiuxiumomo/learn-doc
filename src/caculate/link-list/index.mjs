
// 链表的结点，包含数据和指针（对象数据）
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
  // 1.如果链表中没有任何数据，将头部指向新数据即可
  // 2.创建一个指针，指针指向头部
  // 3.通过遍历current.next,直到current.next位空
  // 4.将新元素追加到为空的位置
  append(data) {
    const newEl = new Node(data);
    if (this.length === 0) {
      this.head = newEl;
    } else {
      // 指针指向头部
      let current = this.head;
      while (current.next) {
        // 指针向下移动
        current = current.next;
      }
      current.next = newEl;
    }
    this.length += 1;
  }
  //根据索引获取数据  
  // 1.判断边界，超出边界的索引直接返回false
  // 2.创建指针指向头部
  // 3.通过索引遍历链表
  // 4.返回index=position位置的data
  get(position) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head; 
    let index = 0; 
    while (index < position) {
     
      current = current.next;
      index++;
    }

    return current.data;
  }
  //查找元素所在位置没找到返回-1
  // 1.创建指针，指向头部
  // 2.通过while循环，判断data是否和当前元素相等
  // 3.循环结束，返回-1
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

  //更新数据-> 更新指定索引位置的数据

  // 1.边界判断，超出边界直接返回

  // 2.创建指针，指向头部
  // 3.遍历索引，只要没到position一直遍历
  // 4.找到位置，替换数据
  update(position, data) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    current.data = data;
    return true;
  }
  //注意这个是向前插入
  // loe在e前面插入o  lo(v)e 将v插入到e的前面

  // 1.判断边界，超出边界直接返回
  // 2.判断插入的位置
       // 在头部
          // 新元素的next指向this.head,this.head重新指向新元素
       // 不在头部
          // 1.创建一个current指针指向头部，创建一个prev指针，指向null
          // 2.通过索引遍历
          // 3.将prev指向current,current下移
          // 4.遍历结束，prev的next指向新元素，新元素的next指向current

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
    //整体长度+1
    this.length += 1;
    return true;
  }

  //根据位置删除,返回被删除的数据
  // 1.判断边界，查出边界的直接返回null
  // 2.如果移除的是头部，直接将head指向head的next即可
  // 3.创建prev指向null,next指针head
  // 4.通过index遍历，将prev指向current,current指向current的next
  // 5.找到index后，将prev.next指向current.next
  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }

    let current = this.head;
    // 这里返回被移除的元素保存在current
    //如果是第一个，如果移除的是头部，直接将head指向head的next即可
    if (position == 0) {
      this.head = this.head.next;
    } else {
      let prev = null;
      // let current = this.head  //提到上面
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

  // 1.通过indexOf找到索引
  // 2.通过removeAt删除元素
  remove(data) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }
    //打印数据
  // 1.创建指针，指向头部，定义连接字符串str
  // 2.while循环，拼接data
  // 3.返回str

  toString() {
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
    return this.length === 0;
  }
  //获取长度
  size() {
    return this.length;
  }
}
const link = new LinkList();
export default link;
