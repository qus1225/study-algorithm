// 무조건 직접해야겠다. 직접 짤라니까 어렵네.
function selectionSort(input: Array<number>) {
  // TODO: 불변성땜에 꼬인듯.
  const arr = JSON.parse(JSON.stringify(input));
  const newArr = [];
  let smallestIndex;
  input.forEach((val, index) => {
    smallestIndex = findSmallestIndex(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
    console.log("arr: ", arr);
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

const input = [5, 3, 6, 2, 10];
const result = selectionSort(input);
console.log("result: ", result);
