// 재귀를 이용한 BinarySearch
export function binarySearch(list, itemToSearch) {
  const midIndex = Math.floor(list.length / 2);

  // base case;
  if (list[midIndex] === itemToSearch) {
    return list[midIndex];
  }

  // recursion
  let newList;
  if (list[midIndex] > itemToSearch) {
    newList = list.filter(val => val < list[midIndex]);
  }
  if (list[midIndex] < itemToSearch) {
    newList = list.filter(val => val > list[midIndex]);
  }

  return binarySearch(newList, itemToSearch);
}
