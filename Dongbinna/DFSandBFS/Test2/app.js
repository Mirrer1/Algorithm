const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

function BFS(graph, startNode) {
  const visited = [];
  let queue = [];

  queue.push(startNode);

  while (queue.length !== 0) {
    const node = queue.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      queue = [...queue, ...graph[node]];
    }
  }
  return visited;
}

console.log(BFS(graph, 'A'));