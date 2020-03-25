export function mergeSort(input) {
  return mergeSortRec(input);

  function mergeSortRec(arr) {
    const mid = Math.floor(arr.length / 2);

    if (!mid) {
      return arr;
    }

    const left = arr.slice(0, mid) || [];
    const right = arr.slice(mid) || [];

    return merge(mergeSortRec(left), mergeSortRec(right));
  }

  function merge(left, right) {
    const result = [];
    let li = 0;
    let ri = 0;

    while (li < left.length && ri < right.length) {
      if (left[li] < right[ri]) {
        result.push(left[li]);
        li++;
      } else {
        result.push(right[ri]);
        ri++;
      }
    }

    while (li < left.length) {
      result.push(left[li]);
      li++;
    }

    while (ri < right.length) {
      result.push(right[ri]);
      ri++;
    }

    return result;
  }
}
