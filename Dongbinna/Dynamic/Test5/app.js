const T = 2;
const input = [
  [3, 4],
  [1, 3, 3, 2, 2, 1, 4, 1, 0, 6, 4, 7],
  [4, 4],
  [1, 3, 1, 5, 2, 2, 4, 1, 5, 0, 2, 3, 0, 6, 1, 2]
];

for (let t = 0; t < T; t++) {
  const N = input[0][0];
  const M = input.shift()[1];

  const dp = [];
  let index = 0;
  for (let d = 0; d < N; d++) {
    dp.push(input[0].slice(index, index + M));
    index += M;
  }
  input.shift();

  for (let j = 1; j < M; j++) {
    for (let i = 0; i < N; i++) {
      let leftUp = 0, leftDown = 0;
      if (i !== 0) {
        leftUp = dp[i-1][j-1];
      }
      if (i !== N - 1) {
        leftDown = dp[i+1][j-1];
      }
      const left = dp[i][j-1];
      dp[i][j] = dp[i][j] + Math.max(leftUp, leftDown, left);
    }
  }

  let result = 0;
  for (let i = 0; i < N; i++) {
    result = Math.max(result, dp[i][M - 1]);
  }

  console.log(result);
}