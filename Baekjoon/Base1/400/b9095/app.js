const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(v => +v);

const N = input.shift();
const list = input;
const dp = [0, 1, 2, 4];

for (let i = 0; i < N; i++) {
  for (let j = 4; j <= list[i]; j++) {
    dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
  }
  console.log(dp[list[i]]);
};