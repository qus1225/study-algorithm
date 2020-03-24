export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let newPosition = i;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        newPosition = j;
        break;
      }
    }

    if (newPosition !== i) {
      const fragment = arr.splice(i, 1);

      arr = [
        ...arr.slice(0, newPosition),
        ...fragment,
        ...arr.slice(newPosition)
      ];
    }
  }

  return arr;
}
