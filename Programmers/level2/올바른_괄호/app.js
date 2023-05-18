// 나의 풀이
function solution(s) {
  let stackCount = 0;

  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === '(' ? 1 : -1;
    if (stackCount < 0) return false;
  }

  return stackCount === 0 ? true : false;
}

// 다른 사람의 풀이
// 정규표현식을 사용하여 간결하게 풀이
function is_pair(s){
  const result = s.match(/(\(|\))/g);
  return result[0] == '(' && result.length % 2 == 0 ? true : false
}