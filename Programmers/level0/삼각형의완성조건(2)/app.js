function solution(sides) {    
  const maxNum = Math.max(...sides);
  const minNum = Math.min(...sides);
  let count = 0;
  
  for (let i = maxNum - minNum + 1; i <= maxNum; i++) count++;
  for (let i = maxNum + 1; i < minNum + maxNum; i++) count++;
  
  return count;
}