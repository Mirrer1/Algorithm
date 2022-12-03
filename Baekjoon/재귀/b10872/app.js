const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const factorial = (N) => {
  if (N <= 1) {
    return 1;
  }
  return N * factorial(N - 1);
};

console.log(factorial(+input));