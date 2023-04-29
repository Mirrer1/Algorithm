// 나의 풀이
function solution(board, moves) {
  const result = [];
  let cnt = 0;
  
  for(let i = 0; i < moves.length; i++) {  
    const peek = moves[i] - 1;
      
    for(let j = 0; j < board.length; j++) {
      if(board[j][peek] === 0 ) continue;          
      else{
        const lastLength = result.length <= 1 ? 0 : result.length - 1;              
        
        if (result[lastLength] === board[j][peek]) {
          board[j][peek] = 0;              
          result.splice(lastLength);              
          cnt += 2;              
        } else {              
          result.push(board[j][peek]);                  
          board[j][peek] = 0;                  
        }
        break;              
      }
    }
  }  
  return cnt;
}

// 다른 사람의 풀이
// reduce, transpose 사용
const transpose = matrix =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map(row =>
    row.reverse().filter(el => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
        basket.pop();
        result += 2;
        continue;
    }
    basket.push(pop);
  }

  return result;
};