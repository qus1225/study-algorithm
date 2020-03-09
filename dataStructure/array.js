// 링 버퍼
export function CircularArray(maxLength) {
  this.maxLength = maxLength;
}
CircularArray.prototype = Object.create(Array.prototype);
CircularArray.prototype.push = function(element) {
  Array.prototype.push.call(this, element);
  while (this.length > this.maxLength) {
    this.shift();
  }
};

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

// 구구단 계산
export function multiplicationTable(times) {
  let result = "";

  Array.from({ length: 9 }, (_, index) => {
    const operand = index + 1;
    result += `${times} * ${operand} = ${times * operand} \n`;
  });

  return result;
}
