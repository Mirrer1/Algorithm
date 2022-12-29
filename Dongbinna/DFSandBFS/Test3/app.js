const [N, M] = [4, 5];
const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

function dfs(x, y) {
  if (x <= -1 || x >= N || y <= -1 || y >= M) return false;

  if (graph[x][y] === 0) {
    graph[x][y] = 1;

    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);

    return true;
  }

  return false;
}

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (dfs(i, j)) result++;
  }
}

console.log(result);