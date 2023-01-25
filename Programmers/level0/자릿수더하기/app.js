function solution(n) {    
  // const arr = n.toString().split('').map(v => +v);
  // return arr.reduce((a, b) => a + b, 0);
  
  return (n + '').split('').map(v => +v).reduce((a, b) => a + b, 0);
}