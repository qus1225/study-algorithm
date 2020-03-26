function factorialize(num) {
  if (num < 2) {
    return 1;
  }

  return num * factorialize(num -1);
}

factorialize(5);
