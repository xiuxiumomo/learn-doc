/**
 * 
 * @param {*} num 
 * @returns 
 * @description 判断是否是质数
 * @description 质数：只能被1和它本身整除。 如果是质数，一个根大于（sqrt(num)） 一个小于（sqrt(num)）
 */
const isPrime = (num) => {
  const temp = parseInt(Math.sqrt(num));
  for (let i = 2; i <= temp; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.count = 0;
    //取模的数据，必须是质数
    this.limit = 7;
  }
  //获取随机索引
  hashFunc(str, size) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    let index = hashCode % size;
    return index;
  }

  // 插入&修改
  put(key, value) {
    //1.获取索引
    const index = this.hashFunc(key, this.limit);
    //2.获取桶
    let burket = this.storage[index];
    //3.如果不存在桶,在该索引位置创建桶
    if (!burket) {
      burket = [];
      this.storage[index] = burket;
    }
    //4.检查是否含有元素,如果存在直接修改元素
    for (let i = 0; i < burket.length; i++) {
      const currItem = burket[i];
      if (currItem[0] == key) {
        currItem[1] = value;
        return;
      }
    }
    //5.桶里面不存在直接追加
    burket.push([key, value]);
    this.count += 1;
    //如果超出容量0.75倍，直接扩容2倍
    if (this.count > this.limit * 0.75) {
      const num = this.limit * 2;
      const newPrime = this.getPrime(num);
      this.resize(newPrime);
    }
  }
  //获取操作
  get(key) {
    const index = this.hashFunc(key, this.limit);
    //1.如果没有桶，说明没有数据
    let burket = this.storage[index];
    if (!burket) {
      return null;
    }
    for (let i = 0; i < burket.length; i++) {
      const currItem = burket[i];
      if (currItem[0] == key) {
        return currItem[1];
      }
    }
    return null;
  }
  //删除
  remove(key) {
    const index = this.hashFunc(key, this.limit);
    //1.如果没有桶，说明没有数据
    let burket = this.storage[index];
    if (!burket) {
      return null;
    }
    for (let i = 0; i < burket.length; i++) {
      const currItem = burket[i];
      if (currItem[0] == key) {
        burket.splice(i, 1);
        this.count -= 1;
        //如果当前个数比长度的1/4还少，直接缩容
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          const num = Math.floor(this.count / 2);
          const newPrime = this.getPrime(num);
          this.resize(newPrime);
        }
        return currItem[1];
      }
    }
    return null;
  }
  //判断是否为空
  isEmpty() {
    return this.count === 0;
  }

  //获取元素的个数
  size() {
    return this.count;
  }
  //扩容操作
  resize(newLimit) {
    //拷贝一份原来的容量
    let oldStorage = this.storage;
    //将原容量滞空
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    //1.找到所有的burket
    for (let i = 0; i < oldStorage.length; i++) {
      const currentBurket = oldStorage[i];
      //如果是空的，直接跳过
      if (currentBurket == null) {
        continue;
      }
      for (let j = 0; j < currentBurket.length; j++) {
        const currentItem = currentBurket[j];
        this.put(currentItem[0], currentItem[1]);
      }
    }
  }
  //判断是否是质数
  isPrime(num) {
    const temp = parseInt(Math.sqrt(num));
    for (let i = 2; i <= temp; i++) {
      if (num % 2 === 0) {
        return false;
      }
    }
    return true;
  }
  //获取传入的最近的质数
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;

  }
}

const ht = new HashTable();

ht.put("jack", 123);

ht.put("pack", 222);
ht.put("jack", 223);
ht.remove("pack");
console.log(ht.get("pack"));
