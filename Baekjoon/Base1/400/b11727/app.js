const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

let N = +input;
const dp = [0, 1, 3, 5];

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2;
  dp[i] = dp[i] % 10007;
}

console.log(dp[N]);