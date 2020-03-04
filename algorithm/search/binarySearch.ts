export function binarySearch(
  list: Array<number>,
  itemToSearch: number
): number {
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
