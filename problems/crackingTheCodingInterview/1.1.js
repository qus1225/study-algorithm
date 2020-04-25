export function hasDuplicate(inputStr) {
  if (!inputStr || inputStr.length <= 1) {
    return false;
  }

  const arr = inputStr.split("");

  let map = {};
  let i = 0;
  while (i < arr.length) {
    const key = arr[i];
    if (map[key]) {
      return true;
    } else {
      map[key] = "existed";
    }
    i++;
  }

  return false;
}
