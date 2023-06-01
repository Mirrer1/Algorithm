// 나의 풀이
function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i + 1 > citations[i]) return i;
  }

  return citations.length;
}

// 다른 사람의 풀이
// filter 메서드를 사용하여 간결하게 풀이
const solution = (citations) => citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;