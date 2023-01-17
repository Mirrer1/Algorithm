const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(v => +v);
const dp = [nums[0]];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
}

console.log(Math.max(...dp));