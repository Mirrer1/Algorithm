// 나의 풀이
function solution(phone_number) {
  const len = phone_number.length - 4;
  return '*'.repeat(len) + phone_number.slice(-4);
}

// 다른 사람의 풀이
// 정규표현식을 사용
function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}