const [N, M] = [2, 15];
const coins = [2, 3];

const dp = Array.from({ length: M + 1 }, () => Number.MAX_VALUE);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = coins[i]; j <= M; j++) {
    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  }
}

console.log(dp[M]);