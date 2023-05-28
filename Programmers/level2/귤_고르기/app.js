// 나의 풀이
function solution(k, tangerine) {
  const counts = {};
  tangerine.forEach(v => counts[v] = (counts[v] ?? 0) + 1);
  const sortedCounts = Object.values(counts).sort((a, b) => a - b);
  
  const restCount = tangerine.length - k;
  let sum = 0;
  let typeCount = Object.keys(counts).length;

  for (const count of sortedCounts) {
    if (sum + count > restCount) break;

    sum += count;
    typeCount--;
  }
  
  return typeCount;
}

// 다른 사람의 풀이
// 간결하게 풀이
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);

  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }

  return answer;
}
