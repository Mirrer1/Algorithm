// 나의 풀이
function solution(a, b) {    
  let result = 0;    
  
  if (a < b) {
      for (let i = a; i <= b; i++) result += i;       
  } else {
      for (let i = b; i <= a; i++) result += i;       
  }   
      
  return result;
}

// 다른 사람의 풀이
// 조건문대신 Math를 사용
function solution(a, b, s = 0){
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}