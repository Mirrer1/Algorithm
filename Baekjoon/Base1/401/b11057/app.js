const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;
const dp = [[], new Array(10).fill(1)];

for (let i = 2; i <= N; i++) {
  dp[i] = [];
  dp[i][0] = dp[i - 1][0] % 10007;

  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  };
};

console.log(dp[N].reduce((a, b) => a + b, 0) % 10007);