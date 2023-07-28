function solution(weights) {
  let answer = 0;
  const map = new Map();
  const ratio = [1, 3 / 2, 2, 4 / 3];

  weights.sort((a, b) => b - a);

  for (const w of weights) {
    for (const r of ratio) {
      if (map.has(w * r)) answer += map.get(w * r);
    }
    map.set(w, (map.get(w) || 0) + 1);
  }
  return answer;
}