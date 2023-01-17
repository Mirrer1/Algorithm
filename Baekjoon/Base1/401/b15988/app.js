const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(v => +v);

const N = input.shift();
const nums = input;

const dp = [0, 1, 2, 4];
const max = Math.max(...nums);

for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

for (let i = 0; i < N; i++) {
  console.log(dp[nums[i]]);
}