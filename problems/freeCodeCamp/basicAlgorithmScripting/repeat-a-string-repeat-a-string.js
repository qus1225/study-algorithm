function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }

  let result = ""
  Array.from({length: num}, (_, index) => {
    result += str;
  })

  return result;
}

repeatStringNumTimes("abc", 3);
