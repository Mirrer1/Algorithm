const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;
const dp = new Array(N + 1);
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < dp.length; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

console.log(String(dp[N]));