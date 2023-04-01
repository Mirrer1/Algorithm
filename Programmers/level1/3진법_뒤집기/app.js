// 나의 풀이
function solution(n) {
  const num = n.toString(3).split('').reverse().join('');
  return parseInt(num, 3);    
}

// 다른 사람의 풀이
// 스프레드 연산자를 사용하여 간결하게 표현
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
