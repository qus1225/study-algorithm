// 재귀

// 팩토리얼 값을 구하는 함수 - 재귀의 가장 단순한 형태
export function factorial(input) {
  // base case
  if (input === 1) {
    return 1;
  }

  // recursion
  return input * factorial(input - 1);
}

// 재귀로 합계구하는 함수. 반복문이 아닌 재귀로 구해봄
export function sum(input) {
  // base case
  if (input.length === 1) {
    return input[0];
  }

  // recursion
  const remains = input.filter((_, index) => index !== 0);
  return input[0] + sum(remains);
}

// 재귀로 가장 큰수 구하기
export function findMax(input) {
  // base case
  if (input.length === 1) {
    return input[0];
  }
  if (input.length === 2) {
    return input[0] > input[1] ? input[0] : input[1];
  }

  // recursion
  const subMax = findMax(input.filter((_, index) => index !== 0));
  return input[0] > subMax ? input[0] : subMax;
}
