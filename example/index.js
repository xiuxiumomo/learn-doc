let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject(1)
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(2)
  }, 2000)
})




Promise.race([p1,p2])
.then((value) => {
    console.log(value); // 输出: "第一个完成"
})
.catch((error) => {
    console.log("有任务失败:", error);
});