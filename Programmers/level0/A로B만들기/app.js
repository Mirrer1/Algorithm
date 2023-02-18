function solution(before, after) {
  const sortBefore = before.split('').sort().join('');
  const sortAfter = after.split('').sort().join('');
  
  return sortBefore === sortAfter ? 1 : 0;     
}