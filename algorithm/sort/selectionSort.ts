// 무조건 직접해야겠다. 직접 짤라니까 어렵네.
export function selectionSort(input: Array<number>) {
  // TODO: 불변성 유지 때문에 좀 번거롭다. 신경 안 써도 되게 JS스럽게 다시 짜보기
  const arr = JSON.parse(JSON.stringify(input));
  const newArr = [];
  let smallestIndex;
  input.forEach((val, index) => {
    smallestIndex = findSmallestIndex(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  });
  return newArr;

  function findSmallestIndex(arr: Array<number>) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }
}
