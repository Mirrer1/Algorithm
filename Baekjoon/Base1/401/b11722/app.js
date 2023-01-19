const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(v => +v);
const dp = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  
  for (let j = 0; j < i; j++) {
    if(nums[i] < nums[j] && dp[j] > max) max = dp[j];
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));