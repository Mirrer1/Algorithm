// 나의 풀이
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisor = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) divisor += 1;
        else divisor += 2;
      }
    
      if (divisor > limit) {
        divisor = power;
        break;
      }
    }
    answer += divisor;
  }
  
  return answer;
}

// 다른 사람의 풀이
// 로직을 분리하여 코드의 가독성 증가
const sol = (n) => {
  if (n == 1) return 1;

  let ret = 1;

  for (let i = 1; i <= n / 2; i++)
      if (n % i == 0) ret++;

  return ret;
}

function solution(number, limit, power) {
  let ans = 0;

  for (let i = 1; i <= number; i++) {
      const cnt = sol(i);
      ans += cnt > limit ? power : cnt;
  }

  return ans;
}

