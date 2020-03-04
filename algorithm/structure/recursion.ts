// 재귀

// 팩토리얼 값을 구하는 함수 - 재귀의 가장 단순한 형태
export function factorial(input: number) {
  // base case
  if (input === 1) {
    return 1;
  }

  // recursion
  return input * factorial(input - 1);
}
