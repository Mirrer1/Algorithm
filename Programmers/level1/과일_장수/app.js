// 나의 풀이
function solution(k, m, score) {
  if(score.length < m) return 0;  
  score.sort((a, b) => a - b);
  
  let total = 0;

  while(score.length >= m){
    const box = score.splice(score.length - m, m);      
    const prize = m * Math.min(...box);
    
    total += prize;
  }
  
  return total;
}

// 다른 사람의 풀이
// filter메서드를 사용하여 간결하게 표현
solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m;