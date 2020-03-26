function frankenSplice(arr1, arr2, n) {

  const arr2Before = arr2.slice(0, n);
  const arr2After = arr2.slice(n);

  const result = [...arr2Before, ...arr1, ...arr2After]  

  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
