function mutation(arr) {
  const creteria = arr[0].toLowerCase().split("");
  const target = arr[1].toLowerCase().split("");

  const result = target.every((val) => creteria.indexOf(val) >= 0)

  return result;
}

mutation(["hello", "hey"]);
