const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

let N = +input;
const result = [];

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    result.push(i);
  }
}

console.log(result.join('\n'));