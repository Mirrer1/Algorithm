// 나의 풀이
function solution(n) {
  const oneNum = n.toString(2).split("1").length;
  
  while (true) {
    n++;
    if (n.toString(2).split("1").length === oneNum) return n;
  }
}

// 다른 사람의 풀이
// 정규표현식 사용
function solution(n,a=n+1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}