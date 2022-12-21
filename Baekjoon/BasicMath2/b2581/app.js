const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let start = +input[0];
let end = +input[1];
const result = [];

for(let i = start; i <= end; i++){
  for (let j = 2; j <= i; j++) {
    if (j * j > i) {
      result.push(i);
      break;
    }
    if (i % j === 0) {
      break;
    }
  }
}

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.reduce((a, b) => a + b, 0));
  console.log(result[0]);
}