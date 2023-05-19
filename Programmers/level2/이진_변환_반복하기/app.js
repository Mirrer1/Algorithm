// 나의 풀이
function solution(s) {
  let count = 0;
  let deletedZero = 0;
  let x = s;

  while (x !== '1') {
    const prevLength = x.length;
    const curLength = x.replaceAll('0', '').length;

    x = curLength.toString(2);
    count++;
    deletedZero += prevLength - curLength;
  }

  return [count, deletedZero];
}

// 다른 사람의 풀이
// 정규표현식 사용
function solution(s) {
  const answer = [0, 0];

  while(s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g)||[]).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}