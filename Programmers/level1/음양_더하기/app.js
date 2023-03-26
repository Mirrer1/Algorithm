// 나의 풀이
function solution(absolutes, signs) {
  signs.forEach((v, i) => {
      if (!v) absolutes[i] *= -1;
  });    
  
  return absolutes.reduce((a, b) => a + b, 0);
}

// 다른 사람의 풀이
// 좀 더 간견한 표현식을 사용
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}