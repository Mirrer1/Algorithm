// 나의 풀이
function solution(left, right) {
  const result = [];
  
  for (let i = left; i <= right; i++) {
    let count = 0;      
    for (let j = 1; j <= i; j++) if (i % j === 0) count++;

    count % 2 !== 0 ? result.push(-i) : result.push(i);
  }
  
  return result.reduce((a, b) => a + b, 0);
}

// 다른 사람의 풀이
// 제곱근이 정수면 약수의 개수가 홀수라는 공식을 이용
function solution(left, right) {
  let answer = 0;
    
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }

  return answer;
}
