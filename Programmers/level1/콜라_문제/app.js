// 나의 풀이
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {  
    const remain = n % a;  
    n = Math.floor(n / a) * b;  
  
    answer += n;  
    n += remain;
  }

  return answer;
}

// 다른 사람의 풀이
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b