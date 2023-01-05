function floydWarshall(dist) {
  for (let k = 0; k < dist.length; k++) {
    for (let i = 0; i < dist.length; i++) {
      for (let j = 0; j < dist.length; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }
}

const graph = [
  [0, 3, 6, Infinity],
  [7, 0, 8, 4],
  [Infinity, Infinity, 0, 2],
  [Infinity, 9, Infinity, 0],
];

floydWarshall(graph);
console.log(graph);