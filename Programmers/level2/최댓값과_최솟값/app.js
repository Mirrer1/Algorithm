// 나의 풀이
function solution(s) {
  s = s.split(' ').map(v => +v);    
  
  return Math.min(...s) + " " + Math.max(...s);
}

// 다른 사람의 풀이
// max, min은 문자열도 취급
function solution(s) {
  s = s.split(' ');    
  
  return Math.min(...s) + " " + Math.max(...s);
}