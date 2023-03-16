function solution(n) {
  return (n + '').split('').map(v => +v).reduce((a, b) => a + b, 0);
}