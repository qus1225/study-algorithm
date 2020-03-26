function getIndexToIns(arr, num) {

  if (arr.length < 1) {
    return 0;
  }

  const sorted = arr.sort(compare);

  let targetIndex = sorted.length;
  for(let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) {
      targetIndex = i;
      break;
    }
  }

  return targetIndex;

  function compare(a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1;
    }
    return 0
  }
}

getIndexToIns([40, 60], 50);
