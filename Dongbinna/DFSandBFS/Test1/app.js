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

function DFS(graph, startNode) {
  const visited = [];
  let stack = [];

  stack.push(startNode);
  
  while (stack.length !== 0) {
    const node = stack.pop();

    if (!visited.includes(node)) {
      visited.push(node);
      stack = [...graph[node], ...stack];
    }
  }
  return visited;
}

console.log(DFS(graph, 'A'));