// 나의 풀이
function solution(sizes) {
  let answer = 1
  
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    };
  };

  const x = sizes.sort((a, b) => b[0] - a[0])[0][0];
  const y = sizes.sort((a, b) => b[1] - a[1])[0][1];
  answer = x * y;

  return answer
}

// 다른 사람의 풀이
// reduce를 사용하여 간결하게 표현
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver;
}