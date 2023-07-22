// 나의 풀이
function solution(k, d) {
  let answer = 0;
  const c = d ** 2;
  let left = d - (d % k);
  let right = 0;

  while (right <= d) {  
    if (left ** 2 + right ** 2 <= c) {      
      answer += Math.floor(left / k) + 1;
      right += k;
    } else {      
      left -= k;
    }
  }
  return answer;
}

// 다른 사람의 풀이
function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) answer += Math.ceil((d ** 2 - x ** 2) ** 0.5 / k) + ((d ** 2 - x ** 2) ** 0.5 % k === 0 ? 1 : 0);
  return answer;
}