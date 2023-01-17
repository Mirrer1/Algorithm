const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const triangle = input.map(row => [0, ...row.split(' ').map(Number), 0]);

const dp = Array.from({ length : N }).map(row=> row = [0]);
dp[0] = triangle[0];

for (let i = 1; i < N; i++) {
  for (let j = 1; j < triangle[i].length-1; j++) {
    dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
  }
  dp[i].push(0);
}

let result = 0;
dp.forEach(row => {
  result = Math.max(...row);
})

console.log(result);