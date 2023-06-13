function solution(k, dungeons) {
  const result = [];
  const visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    result.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }
  
  dfs(0, k);
  return Math.max(...result);
}