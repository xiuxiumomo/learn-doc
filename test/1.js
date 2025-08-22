function chunkIntersection(arrays, chunkSize = 10000) {
  if (!Array.isArray(arrays) || arrays.length === 0) return [];

  // 先取第一个数组作为基准
  let result = arrays[0];

  for (let k = 1; k < arrays.length; k++) {
    const set = new Set(arrays[k]);
    let temp = [];

    // 分片处理 result
    for (let i = 0; i < result.length; i += chunkSize) {
      const chunk = result.slice(i, i + chunkSize);
      temp = temp.concat(chunk.filter(item => set.has(item)));
    }

    // 更新 result
    result = [...new Set(temp)];
  }

  return result;
}
