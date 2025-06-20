class ArrayList {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  toString() {
    return this.items.join();
  }
  //交换
  swap(m, n) {
    let temp = this.items[m];
    this.items[m] = this.items[n];
    this.items[n] = temp;
  }
  bubble() {
    const length = this.items.length;
    // [1,   2,   3,    4,          5    ]
    //                 length-2   length-1
    for (let j = length - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.items[i] > this.items[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    }
  }
  select() {
    const length = this.items.length;
    for (let j = 0; j < length - 1; j++) {
      let min = j;
      for (let i = min + 1; i < length; i++) {
        if (this.items[i] < this.items[min]) {
          min = i;
        }
      }
      this.swap(j, min);
    }
  }
}

const list = new ArrayList();
list.add(2);
list.add(209);
list.add(3333);
list.add(18);
list.add(3);
list.add(65);
list.add(80);
list.select();
console.log(list.toString());
