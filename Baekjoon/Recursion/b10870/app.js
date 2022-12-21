const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

function fibonacci(N) {
  if (N === 0) {
    return 0;
  }

  if (N === 1) {
    return 1;
  }

  return fibonacci(N - 1) + fibonacci(N - 2);
};

console.log(fibonacci(input));