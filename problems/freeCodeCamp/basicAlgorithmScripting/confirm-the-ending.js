function confirmEnding(str, target) {

  const ending = str.substring(str.length - target.length)
  
  return ending === target;
}

confirmEnding("Bastian", "n");
