function solution(keyinput, board) {
  const result = [0, 0];
  const max = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  
  keyinput.forEach(e => {
      switch(e) {
          case 'left' :
          if (!(result[0] === -max[0])) result[0]--;
          break;              
          case 'right' :
          if (!(result[0] === max[0])) result[0]++;
          break;              
          case 'up' :
          if (!(result[1] === max[1])) result[1]++;
          break;              
          case 'down' :
          if (!(result[1] === -max[1])) result[1]--;
          break;
        }
      })
  return result;
}