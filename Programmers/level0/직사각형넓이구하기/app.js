function solution(dots) {
  const width = Math.max(...dots.map(v => v[0])) - Math.min(...dots.map(v => v[0]));
  const height = Math.max(...dots.map(v => v[1])) - Math.min(...dots.map(v => v[1]));
  
  return width * height;
}