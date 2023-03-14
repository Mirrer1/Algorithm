// 나의 풀이
function solution(dots) {
  let answer = 0;

  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) answer += 1;
  }

  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);
  return answer > 0 ? 1 : 0;
}

// 다른 사람의 풀이
function solution(dots) {
  if((dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]) === (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])) return 1
  if((dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]) === (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])) return 1
  if((dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]) === (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])) return 1

  return 0;
}