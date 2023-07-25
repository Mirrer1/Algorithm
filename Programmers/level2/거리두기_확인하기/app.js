function solution(places) {
  const result = [];
  const offsetX = [0, 0, -1, 1];
  const offsetY = [-1, 1, 0, 0];
  
  const bfs = (start, place) => {
    const visited = [...Array(5)].map(() => Array(5).fill(false));
    const queue = [start];

    while (queue.length) {
      const [x, y, depth] = queue.shift();

      if (!visited[x][y]) {
        visited[x][y] = true;        
        if (depth && place[x][y] === 'P') return false;
        
        offsetX.forEach((dx, i) => {
          const newX = x + dx;
          const newY = y + offsetY[i];

          if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5
            && depth < 2 && place[newX][newY] !== 'X') {
            queue.push([newX, newY, depth + 1]);
          }
        });
      }
    }
    return true;
  };
  
  places.forEach(place => {
    let hasDistance = 1;

    outer: for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P' && !bfs([i, j, 0], place)) {
          hasDistance = 0;
          break outer;
        }
      }
    }
    result.push(hasDistance);
  });
  
  return result;
}