// 나의 풀이
function solution(s) {
  if (s.length === 4 || s.length === 6) return s.split('').every(v => !isNaN(v));
  else return false;
}

// 다른 사람의 풀이
// 정규표현식 사용
function alpha_string46(s) {
  const regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}