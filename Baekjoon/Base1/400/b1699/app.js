const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const N = +input;
const dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= N; i++) {
  for(let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  };
};

console.log(dp[N]);