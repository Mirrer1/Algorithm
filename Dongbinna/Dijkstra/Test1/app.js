const graph = [
  [Infinity, 1, Infinity, 2, Infinity],
  [1, Infinity, 3, Infinity, 2],
  [Infinity, 3, Infinity, Infinity, 1],
  [2, Infinity, Infinity, Infinity, 2],
  [Infinity, 2, 1, 2, Infinity],
];
const visited = Array(N).fill(false);
const dist = visited.map((_, i) => graph[0][i]);

const findSmallestNode = (visited, distance) => {
  let minDist = Infinity;
  let minIdx = 0;
  for (let i = 0; i < distance.length; i++) {
    if (visited[i]) continue;
    if (distance[i] < minDist) {
      minDist = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
};

const dijkstra = (graph, visited, dist) => {
  distance[0] = 0;
  visited[0] = true;
  
  for (let i = 0; i < distance.length; i++) {
    const nodeIdx = findSmallestNode(visited, distance);
    visited[nodeIdx] = true;

    for (let j = 0; j < distance.length; j++) {
      if (visited[j]) continue;
      if (distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
        distance[j] = distance[nodeIdx] + graph[nodeIdx][j];
    }
  }
};