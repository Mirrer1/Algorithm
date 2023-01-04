const N = 4;
const arr = [1, 3, 1, 5];

const dp = new Array(100).fill(0);
dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);

for (let i = 2; i < N; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
}

console.log(dp[N - 1]);