function solution(relation) {
  const rowLen = relation.length;
  const colLen = relation[0].length;
  let answer = 0;
  
  const bfs = () => {
    const queue = [...Array(colLen)].map((_, i) => [i]);
    const candidate = [];
    while (queue.length) {
      const indices = queue.shift();       

      if (candidate.find(cand => cand.every(index => indices.includes(index)))) continue;
        
      const set = new Set();
      for (let i = 0; i < rowLen; i++) {
        set.add(JSON.stringify(indices.map((index) => relation[i][index])));
      }      
    
      if (set.size === rowLen) {
        candidate.push(indices);          
      } else {
        for (let i = indices[indices.length - 1] + 1; i < colLen; i++) {
          queue.push([...indices, i]);
        }
      }
    }    
    return candidate.length;
  };
  
  return bfs();
}