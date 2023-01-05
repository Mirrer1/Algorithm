const graph = [
  [],
  [
    { to: 2, dist: 1 },
    { to: 4, dist: 2 },
  ],
  [
    { to: 1, dist: 1 },
    { to: 3, dist: 3 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 3 },
    { to: 5, dist: 1 },
  ],
  [
    { to: 1, dist: 2 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 2 },
    { to: 3, dist: 1 },
    { to: 4, dist: 2 },
  ],
];

const dist = Array(graph.length).fill(Infinity);
const queue = [{ to: 1, dist: 0 }];
dist[1] = 0;

while (queue.length) {
  const { to } = queue.pop();  
  
  graph[to].forEach((next) => {
    const acc = dist[to] + next.dist;

    if (dist[next.to] > acc) {
      dist[next.to] = acc;    
      queue.push(next);
    }
  });
}