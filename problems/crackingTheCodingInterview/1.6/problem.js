export function compress(str) {
  let beforeLetter = "";
  let result = "";
  let count = 1;

  if (!str) {
    return str;
  }

  for (const v of str) {
    if (beforeLetter === v) {
      count++;
    } else {
      if (beforeLetter) {
        result += `${beforeLetter}${count}`;
      }
      beforeLetter = v;
      count = 1;
    }
  }

  result += beforeLetter + count;

  return result.length < str.length ? result : str;
}
