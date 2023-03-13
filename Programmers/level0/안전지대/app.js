// 나의 풀이
const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function solution(board) {
  const n = board.length;
  const danger = JSON.parse(JSON.stringify(board));

  for(let x = 0; x < n; x++){
    for(let y = 0; y < n; y++){
      if(!board[x][y]) continue;

        for(let i = 0; i < 8; i++){
          const nx = x + dx[i];
          const ny = y + dy[i];
                
          if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
                
          danger[nx][ny] = 1;
        }
      }
    }
    
  const mineCnt = danger.flat().filter(d => d).length;
  return n * n - mineCnt;
}

// 다른 사람의 풀이
// 2차원 배열을 forEach로 중첩 순회
// 지뢰를 기준으로 주변에 지뢰가 있는지 확인하는 방식으로 접근
function solution(board) {
  let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
  let safezone = 0;

  board.forEach((row, y, self) => row.forEach((it, x) => {
    if (it === 1) return false;
    return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
    ? false 
    : safezone++;
  }));

  return safezone;
}