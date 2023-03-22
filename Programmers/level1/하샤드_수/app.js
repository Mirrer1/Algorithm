function solution(x) {
  const sum = (x + '').split('').map(v => +v).reduce((a, b) => a + b, 0);
  
  return x % sum === 0 ? true : false;
}