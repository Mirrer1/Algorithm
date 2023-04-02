// 나의 풀이
function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort((a,b) => a - b);

  for(let i = 0; i < d.length; i++) {
    answer++;
    sum += d[i];

    if(sum > budget) answer--;
  }

  return answer;
}

// 다른 사람의 풀이
// reduce함수 사용
function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

  return d.length;
}
