const N = 7;
const power = [15, 11, 4, 8, 5, 2, 4];
power.reverse();
const dp = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (power[j] < power[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

let maxValue = 0;
for (let i = 0; i < N; i++) {
  maxValue = Math.max(maxValue, dp[i]);
}
console.log(N - maxValue);