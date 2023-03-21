// 나의 풀이
function solution(n) {
  for (let i = 2; i < n; i++) {
      if (n % i === 1) return i;
  }
}

// 다른 사람의 풀이
// while문에서 증감 연산자를 사용
function solution(n, x = 1) {    
  while (x++) {
      if (n % x === 1) return x;
  }    
}