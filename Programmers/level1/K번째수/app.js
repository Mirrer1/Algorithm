// 나의 풀이
function solution(array, commands) {
  const answer = [];
  
  for(let i = 0; i < commands.length; i++) {
    const list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
    
    answer.push(list[commands[i][2]-1]);
  }
  return answer;
}

// 다른 사람의 풀이
// 구조 분해 할당 사용
function solution(array, commands) {
  return commands.map(command => {
      const [sPosition, ePosition, position] = command
      const newArray = array
          .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
          .sort((a,b) => a - b)    

      return newArray[position - 1]
  })
}