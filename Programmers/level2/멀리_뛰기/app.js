// 나의 풀이
function solution(n) {  
  const dp = Array.from({length:n}).fill(0);
  dp[0] = 1;
  dp[1] = 1;  
  
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  
  return dp[n];
}

// 다른 사람의 풀이
// 재귀함수를 사용하여 간결하게 표현
function jumpCase(num) {
  if (num === 1) return 1
  if (num === 2) return 2
  
  return jumpCase(num-1) + jumpCase(num-2)
}