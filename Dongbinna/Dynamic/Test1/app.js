// // TopDown
// const dp = new Array(100).fill(0);

// function fibonacci(n) {
//   if (n === 0 || n === 1) return 1;
//   if (dp[n] !== 0) return dp[n];

//   dp[n] = fibonacci(n - 2) + fibonacci(n - 1);
//   return dp[n];
// }

// console.log(fibonacci(99));

// BottomUp
const dp = new Array(100).fill(0);

dp[0] = 1;
dp[1] = 1;
const n = 99;

for (let i = 2; i < n + 1; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

console.log(dp[n]);