const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;
let result = 0;

for (let i = 1; i <= N; i *= 10) {
  result += N - i + 1;
};

console.log(result);