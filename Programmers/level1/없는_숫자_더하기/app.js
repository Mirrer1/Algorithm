// 나의 풀이
function solution(numbers) {
  let result = 0;
  
  for (let i = 0; i <= 9; i++) {
      if (!numbers.includes(i)) result += i;
  }
  
  return result;
}

// 다른 사람의 풀이
// 전체 합에서 배열의 합을 뺀다.
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}