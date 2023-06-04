// 나의 풀이
const solution = (n, left, right) => {
  const answer = [];
  
  for (let i = left; i <= right; i++) {
    const share = parseInt(i / n);
    const reminder = i % n;
    answer.push(Math.max(share, reminder) + 1);
  }

  return answer;
}

// 다른 사람의 풀이
// 간결한 계산식으로 풀이
function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
