function solution(arr, divisor) {
  const result = arr.filter(v => v % divisor === 0).sort((a, b) => a - b);    
  
  result.length === 0 && result.push(-1);
  
  return result;
}