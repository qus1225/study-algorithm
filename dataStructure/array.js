// 피보나치 수열 계산
export function fibonacci(length) {
  if (length <= 0) {
    return null;
  }

  let result = [0, 1];

  if (length === 1) {
    return result[0];
  }

  if (length === 2) {
    return result.join(", ");
  }

  let loopTime = length - 2;
  while (loopTime > 0) {
    result.push(result[result.length - 2] + result[result.length - 1]);
    loopTime = loopTime - 1;
  }

  return result.join(", ");
}
