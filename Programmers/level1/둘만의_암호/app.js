// 나의 풀이
function solution(s, skip, index) { 
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'].filter((a) => !skip.includes(a));
  
  return s.split('').map((a) => alphabet[(alphabet.indexOf(a)+index) % alphabet.length]).join('');
}

// 다른 사람의 풀이
// 정규 표현식 사용
const solution = (s, skip, index) => {
  let ans = '';
  const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
    new RegExp(`[^${skip}]`, 'g'),
  );

  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }
  
  return ans;
};