export function binarySearch(list, itemToSearch) {
  let lowIndex = 0;
  let highIndex = list.length - 1;
  let midIndex;

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = list[midIndex];
    if (guess === itemToSearch) {
      return midIndex;
    }

    if (guess > itemToSearch) {
      highIndex = midIndex - 1;
    }

    if (guess < itemToSearch) {
      lowIndex = midIndex + 1;
    }
  }

  return null;
}

// 재귀를 이용한 BinarySearch. 찾은 값의 index가 아닌 갑 자체를 반환
export function binarySearchWithRecursion(list, itemToSearch) {
  const midIndex = Math.floor((list.length - 1) / 2);
  let newList;

  // base case
  if (list[midIndex] === itemToSearch) {
    return list[midIndex];
  }

  // recursion
  if (list[midIndex] > itemToSearch) {
    newList = list.filter(val => val < list[midIndex]);
    return binarySearchWithRecursion(newList, itemToSearch);
  }
  if (list[midIndex] < itemToSearch) {
    newList = list.filter(val => val > list[midIndex]);
    return binarySearchWithRecursion(newList, itemToSearch);
  }

  return null;
}
