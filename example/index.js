function filter(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

const arr = [1, 2, 3];

const res = arr.map( (item) => item * 2);
console.log(res);
