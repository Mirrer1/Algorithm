function solution(N, road, K) {  
  const dist = Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a,b,c]) => {        
    adj[a].push({ to: b, time: c }); 
    adj[b].push({ to: a, time: c }); 
  });

  const pq = [{ to: 1, time: 0 }];
  dist[1] = 0;

  while(pq.length) {
    let {to, time} = pq.pop();
        
    adj[to].forEach(next => {
      if(dist[next.to] > dist[to] + next.time) {
        dist[next.to] = dist[to] + next.time;
        pq.push(next);
      }
    })
  }
  
  return dist.filter((item) => item <= K ).length;
}