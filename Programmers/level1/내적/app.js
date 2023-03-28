// 나의 풀이
function solution(a, b) {
  let result = 0;
  
  for (let i = 0; i < a.length; i++) {        
      result += a[i] * b[i];           
  }
  
  return result;
}

// 다른 사람의 풀이
// reduce함수를 사용
function solution(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
