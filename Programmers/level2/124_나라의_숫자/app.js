// 나의 풀이
function solution(n) {
  const numArr = [4, 1, 2];
  let answer = '';

  while(n) {
    answer = numArr[n % 3] + answer;      
    n = n % 3 === 0 ? n / 3 -1 : Math.floor(n / 3);
  }

  return answer;
}

// 다른 사람의 풀이
// 나의 풀이를 간결하게 표현
function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}