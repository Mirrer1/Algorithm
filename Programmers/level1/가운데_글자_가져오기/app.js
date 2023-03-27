// 나의 풀이
function solution(s) {
  let result = '';
  
  if (s.length % 2 === 0) result += s[s.length / 2 - 1] + s[s.length / 2];
  else result += s[Math.floor(s.length / 2)];
  
  return result;
}

// 다른 사람의 풀이
// 가운데 index를 구한 뒤 삼항연산자를 이용
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}