## 二叉树

>每一个节点最多不超过2的树

### 概念

- 1.叶子节点,没有子节点的节点
- 2.度,至少含有一个节点的节点

- 1.一个二叉树的第(i)层最大拥有2^(i-1)个节点,i>=1
- 2.深度为k的二叉树最多有 2^k-1个节点,k>=1
- 3.对于任意非空二叉树,n0表示叶子节点的个数,n2表示度为2的非叶子节点的个数 n0=n2+1


## 二叉搜索树 barnyar serch tree

- 左节点小于父节点
- 右节点大于父节点
- 左右节点满足二叉搜索树

特点
- 1.较小的元素在树的左边
- 2.较大的元素在树的右边

## 常用的方法

### insert(key)添加操作

### search(key) 查找


### inOrderTraverse 中序遍历法遍历所有节点

### preOrderTraverse 先序遍历法遍历所有节点

### postOrderTraverse 后续遍历法遍历所有节点

### min() 最小值

### max() 最大值

### remove(key) 删除

- 1. 没有找到key
- 2. 找到了key
  - 2.1 没有子节点
  - 2.2 有一个子节点
  - 2.3 有两个子节点
    - 2.3.1 左子树的最大值替换要删除的节点
    - 2.3.2 右子树的最小值替换要删除的节点 
  


```js

/*
 * @Author: xiuxiumomo
 * @Date: 2024-01-12 20:23:51
 * @Last Modified by: xiuxiumomo
 * @Last Modified time: 2025-07-02 10:58:01
 * @Description 二叉搜索树封装
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const newNode = new Node(key);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this._insert(this.root, newNode);
    }
  }
  // node 上一次节点  newNode 要插入的节点
  _insert(node, newNode) {
    //往左边插入
    if (newNode.key < node.key) {
      //左边没有任何节点
      if (node.left == null) {
        node.left = newNode;
      } else {
        //左边依然有节点
        this._insert(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this._insert(node.right, newNode);
      }
    }
  }
  // 先序遍历
  preOrderTranversal(callBack) {
    this._preOrderTranversal(this.root, callBack);
  }
  _preOrderTranversal(node, callBack) {
    if (node != null) {
      //处理当前节点
      callBack(node.key);
      //处理当前节点的左边
      this._preOrderTranversal(node.left, callBack);
      //处理当前节点的右边
      this._preOrderTranversal(node.right, callBack);
    }
  }
  // 中序遍历
  midOrderTranversal(callBack) {
    this._midOrderTranversal(this.root, callBack);
  }
  _midOrderTranversal(node, callBack) {
    if (node != null) {
      //处理当前节点的左边
      this._midOrderTranversal(node.left, callBack);
      //处理当前节点
      callBack(node.key);
      //处理当前节点的右边
      this._midOrderTranversal(node.right, callBack);
    }
  }
  // 后序遍历
  postOrderTranversal(callBack) {
    this._postOrderTranversal(this.root, callBack);
  }
  _postOrderTranversal(node, callBack) {
    if (node != null) {
      //处理当前节点的左边
      this._postOrderTranversal(node.left, callBack);

      //处理当前节点的右边
      this._postOrderTranversal(node.right, callBack);
      //最后处理当前节点
      callBack(node.key);
    }
  }
  //最小值: 从上到下，一直找最左边
  min() {
    let node = this.root;
    while (node.left != null) {
      node = node.left;
    }
    return node.key;
  }
  //最大值： 从上到下，一直找最右边
  max() {
    let node = this.root;
    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  }
  //查找值
  search(key) {
    return this._search(this.root, key);
  }
  _search(node, key) {
    if (node != null) {
      if (key < node.key) {
        return this._search(node.left, key);
      } else if (key > node.key) {
        return this._search(node.right, key);
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  //删除
  remove(key) {
    //当前节点
    let current = this.root;
    //当前节点的父节点
    let parent = null;
    //是否是左节点
    let isLeftChild = true;
    // 1.判断是否存在该节点
    while (current != null) {
      parent = current;
      if (key < current.left) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      //一直找到最底层还是没有，说明没找到
      if (current == null) return false;
    }
    // 2 节点存在 current.key = key

    // 2.1.删除的节点没有子节点

    if (current.left == null && current.right == null) {
      // 如果是根节点
      if (current == this.root) {
        this.root = null;
      } else {
        //如果不是根节点
        if (isLeftChild) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
      //删除B的情况

      // 2.2.删除的节点有一个子节点
    } else if (current.right == null) {
      //当只有两层关系的时候，删除最下层的同时，下层的子节点提升给root
      if (current == this.root) {
        this.root = current.left;
      }

      if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
      //删除D的情况
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      }
      if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {
      //获取后继节点
      let successor = this.getSuccssor(current);
      //判断是否是根节点
      if (current == this.root) {
        this.root = successor;
        //如果要删除的左边
      } else if (isLeftChild) {
        parent.right = successor;
        //如果要删除的是右边
      } else {
        parent.left = successor;
      }
      successor.left = current.left;
    }

    // 2.3删除的节点有两个子节点
  }

  //获取后继
  getSuccssor(delNode) {
    //
    let successor = delNode;
    //当前后继节点
    let current = successor.right;

    //要删除节点的父节点
    let successorParent = delNode;
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }
    if (successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }
}

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);

let str = "";

// bst.preOrderTranversal((k) => {
//   str += k + "  ";
// });

// console.log(str); //11  7  5  3  6  9  8  10  15  13  12  14  20  18  25
bst.remove(15)
bst.midOrderTranversal((k) => {
  str += k + "  ";
});
console.log(str); // 3  5  6  7  8  9  10  11  12  13  14  15  18  20  25
// bst.postOrderTranversal((k) => {
//   str += k + "  ";
// });
// console.log(str); //  3  6  5  8  10  9  7  12  14  13  18  25  20  15  11
// console.log(bst.search(18));

```