/**
 * 기본단계(정렬하는데 가장 간단한 배열): 빈 배열이나, 요소가 한개인 배열
 */
export function quickSort(input) {
  if (input.length < 2) {
    // base case
    return input;
  } else {
    // recursion
    const pivot = input[0];
    const smaller = input.filter(val => val < pivot);
    const bigger = input.filter(val => val > pivot);

    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
  }
}
