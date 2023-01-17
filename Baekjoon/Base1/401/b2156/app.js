const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(v => +v);

const N = input.shift();
const grape = input;

const dp = new Array(N).fill(0);
dp[1] = grape[0];
dp[2] = grape[0] + grape[1];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 3] + grape[i - 1] + grape[i - 2], dp[i - 2] + grape[i - 1]);
};

console.log(dp[N]);