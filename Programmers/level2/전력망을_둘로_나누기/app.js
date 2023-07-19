function solution(n, wires) {
  const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));  
  const dfs = (arr, node) => {
    let res = 0;
    for (let i = 1; i <= arr[node].length; i += 1) {
      if (arr[node][i]) {
        arr[node][i] = arr[i][node] = 0;
        res += 1 + dfs(arr, i);
      } 
    }
    return res;
  }
  
  let result = 100;    
  wires.forEach(wire => {
    graph[wire[0]][wire[1]] = graph[wire[1]][wire[0]] = 1;
  })
  
  wires.forEach(wire => {
    const copy = graph.map(v => v.slice());
    const [a, b] = wire;
    copy[a][b] = copy[b][a] = 0;
    result = Math.min(result, Math.abs(dfs(copy, a) - dfs(copy, b)));
  })
  return result;
}