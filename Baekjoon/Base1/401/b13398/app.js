const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(v => +v);

const dp = [nums[0]];
const dp2 = [nums[0]];

for (let i = 1; i < N; i++) {
  if (nums[i] > nums[i] + dp[i-1]) dp[i] = nums[i];
  else dp[i] = nums[i] + dp[i-1];  
};

for (let i = 1; i < N; i++) {
  if (dp[i-1] > nums[i] + dp2[i-1]) dp2[i] = dp[i-1];
  else dp2[i] = nums[i] + dp2[i-1];  
};

const dpMax = Math.max(...dp);
const dp2Max = Math.max(...dp2);
console.log(Math.max(dpMax, dp2Max));