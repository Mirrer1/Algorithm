const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;
const dp = [0, 3, 7];

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[N]);