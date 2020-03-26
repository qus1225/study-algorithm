function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const target = arr.slice(i, i + size);
    result.push(target);
  }
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
