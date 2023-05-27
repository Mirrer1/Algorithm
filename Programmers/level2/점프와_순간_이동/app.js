// 나의 풀이
function solution(n) {
  let consumption = 0;
  
  while (n) {
    if (n % 2) {
      n = (n - 1) / 2;
      consumption++;
    } else {
      n /= 2;
    }
  }

  return consumption;
}

// 다른 사람의 풀이
// 2진수를 이용하여 간결하게 풀이
function solution(n) {
  return [...n.toString(2)].filter(Number).length;
}