function reverseString(str) {
  const arr = str.split("");
  let resultStr = [] ;

  arr.forEach((val) => {
    resultStr.unshift(val);
  })

  return resultStr.join("");
}

reverseString("hello");
