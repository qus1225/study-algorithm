export function isPermutaiton(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  if (!arr1.length || !arr2.length) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.length === 0) {
      return false;
    }

    const targetIndex = arr2.indexOf(arr1[i]);
    if (targetIndex < 0) {
      return false;
    }

    arr2.splice(targetIndex, 1);
  }

  if (arr2.length > 0) {
    return false;
  }

  return true;
}
