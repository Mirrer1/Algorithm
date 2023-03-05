function solution(score) {
  const avg = score.map(v => (v[0] + v[1]) / 2);
  const sorted = [...avg].sort((a, b) => b - a, 0);
  
  return avg.map(v => sorted.indexOf(v) + 1);
}