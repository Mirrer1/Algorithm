function solution(n) {
  const num = Math.sqrt(n);
  
  return num % 1 === 0 ? Math.pow(num + 1, 2) : -1;
}