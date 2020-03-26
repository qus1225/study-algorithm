function findLongestWordLength(str) {
  const arr = str.split(" ");

  let maxLength = 0;
  arr.forEach((val) => {
    if (val.length > maxLength) {
      maxLength = val.length;
    }
  })

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
