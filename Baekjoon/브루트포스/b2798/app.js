const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(v => +v);
const list = input[1].split(' ').map(v => +v);
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = list[i] + list[j] + list[k];
      if (sum > result && sum <= M) {
        result = sum;
      }
    }
  }
}

console.log(result);