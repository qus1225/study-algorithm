/**
 * JS에 불변성을 유지할 수 있는 기능이 있다면 selectionSortWithImmutable이 직관적이지만,
 * 그렇지 않으므로, selectionSort이 더 JS스러운 코딩이다.
 *
 */

export function selectionSort(input: Array<number>) {
  let temp;
  input.forEach((_, criterialindex) => {
    for (let i = criterialindex + 1; i < input.length; i++) {
      if (input[i] < input[criterialindex]) {
        temp = input[criterialindex];
        input[criterialindex] = input[i];
        input[i] = temp;
      }
    }
  });

  return input;
}

export function selectionSortWithImmutable(input: Array<number>) {
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
