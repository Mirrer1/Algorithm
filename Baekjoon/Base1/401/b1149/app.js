const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const rgb = input.map(v => v.split(' ').map(v => +v));

const dp = [...new Array(N + 1)].map(v => new Array(3).fill(0));
dp[1] = rgb[0];

for (let i = 2; i <= N; i++) {
  dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + rgb[i-1][0];
  dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + rgb[i-1][1];
  dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + rgb[i-1][2];
};

console.log(Math.min(...dp[N]));