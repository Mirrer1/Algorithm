// 나의 풀이
function solution(A,B){
  let result = 0;  
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);  
  
  for (let i = 0; i < A.length; i++) {  
    result += A[i] * B[i];
  }   
  
  return result;
}

// 다른 사람의 풀이
// reduce 메서드를 사용해서 간결하게 표현
function solution(A,B){
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}