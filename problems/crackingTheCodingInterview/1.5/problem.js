export function needOneOperation(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  const arr1 = str1.split("");
  const arr2 = str2.split("");

  if (arr1.length === arr2.length) {
    // 길이가 같으면 교체로 해결
    return hasOneDifference(arr1, arr2);
  } else {
    // 길이가 다르면 삽입/삭제로 해결
    const large = arr1.length > arr2.length ? arr1 : arr2;
    const less = arr1.length > arr2.length ? arr2 : arr1;

    const gap = large.length - less.length;

    if (gap > 1) {
      return false;
    }

    return needOneSubstration(large, less);
  }

  function hasOneDifference(arr1, arr2) {
    let tolerance = 1;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        if (tolerance === 0) {
          return false;
        }
        tolerance--;
      }
    }

    return true;
  }

  function needOneSubstration(large, less) {
    let newLarge;

    for (let i = 0; i < large.length; i++) {
      if (large[i] !== less[i]) {
        newLarge = arr1.filter((_, index) => index !== i);
        break;
      }
    }

    return newLarge.join("") === less.join("");
  }
}
