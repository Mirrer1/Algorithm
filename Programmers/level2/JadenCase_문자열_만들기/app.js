// 나의 풀이
function solution(s) {  
  const str = s.split(' ');
  const result = str.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

  return result.join(' ');
}

// 다른 사람의 풀이
// 나의 풀이를 좀 더 간결하게 표현
function solution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
