export function bucketSort(arr) {
  const bucket = [];

  arr.forEach(val => {
    bucket[val] = val;
  });

  let result = [];
  bucket.forEach(val => {
    if (val || typeof val === "number") {
      result.push(val);
    }
  });

  return result;
}
