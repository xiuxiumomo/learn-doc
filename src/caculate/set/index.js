class MySet {
  constructor() {
    this.items = {};
  }
  //新增
  add(value) {
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;

    return true;
  }
  //判断是否含有
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  //移除
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  //清空
  clear() {
    this.items = {};
  }
  //获取长度
  size() {
    return Object.keys(this.items).length;
  }
  //获取所有值(k和v)是一致的
  values() {
    return Object.values(this.items);
  }
  //并集 在A中存在或者在B中存在
  union(otherSet) {
    let unionSet = new MySet();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    const oValues = otherSet.values();
    for (let j = 0; j < oValues.length; j++) {
      unionSet.add(oValues[j]);
    }
    return unionSet;
  }

  //交集 在A中存在，且在B中存在
  intersection(otherSet) {
    let interSet = new MySet();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        interSet.add(values[i]);
      }
    }
    return interSet
  }
  //差集 存在A，且不存在B中
  difference(otherSet) {
    let diffSet = new MySet();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        diffSet.add(values[i]);
      }
    }
    return diffSet
  }
  //子集： 所有的元素即存在A中也存在B中
  subset(parentSet) {
    let bool = true
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!parentSet.has(values[i])) {
        return bool = false;
       
      }
    }
    return bool
    
  }
}

const myset = new MySet();
const otherset = new MySet();
myset.add(1);
myset.add(2);

otherset.add(2);
otherset.add(4);

console.log(myset.subset(otherset));
