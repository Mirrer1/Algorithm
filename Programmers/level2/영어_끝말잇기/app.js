// 나의 풀이
function solution(n, words) {
  let before = words[0];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    const player = i % n + 1;

    if (before.slice(-1) !== words[i][0]) return [player, turn];      
    if (words.findIndex(item => words[i] === item) !== i) return [player, turn];

    before = words[i];
    if (player === n) turn += 1;
  }

  return [0, 0];
}

// 다른 사람의 풀이
// reduce메서드를 사용
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
    return now[now.length - 1];
  }, "")

  return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0,0];
}