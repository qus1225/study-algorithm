function titleCase(str) {
  const arr = str.split(" ").map((val, index) => {
    const semiResult = val[0].toUpperCase() + val.substring(1).toLowerCase();
    return semiResult;
  })

  const result = arr.join(" ");

  return result;
}

titleCase("I'm a little tea pot");
