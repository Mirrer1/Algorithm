const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(v => +v);
const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  const temp = [1];

  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) temp.push(dp[j] + 1);
  }

  dp[i] = Math.max(...temp);
}

console.log(Math.max(...dp));