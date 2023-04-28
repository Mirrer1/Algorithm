function solution(p, c) {
  p.sort();
  c.sort();

  for (let i = 0; i < p.length; i++) {
    if (p[i] != c[i]) return p[i];
  }
}