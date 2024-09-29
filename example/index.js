function myNew(Fn, ...arg) {
  if (typeof Fn !== "function") {
    throw error("必须传入函数");
  }
  let obj = Object.create(Fn.prototype);
  let res = Fn.apply(obj, arg);
  return res instanceof Object ? res : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  return { pack: "1" };
}
const p = myNew(Person, "jack", 20);
const p2 = new Person("jack", 20);
console.log(p2);
