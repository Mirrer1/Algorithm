// 나의 풀이
function solution(x, n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
      result.push(x * i);
  }
  
  return result;
}

// 다른 사람의 풀이
// 아래 풀이가 더 간결하지만 성능상으로는 for가 더 적합
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
