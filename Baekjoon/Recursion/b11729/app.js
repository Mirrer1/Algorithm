const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const num = +input;
let count = 0;
let result = [];

function Hanoi(N, from, other, to) {
  if (N === 0) {
    return;
  } else {
    Hanoi(N - 1, from, to, other);
    result.push([from, to]);
    count++;
    Hanoi(N - 1, other, from, to);
  }
}

Hanoi(num, '1', '2', '3');
console.log(count);
console.log(result.map(v => v.join(' ')).join('\n'));