// 나의 풀이
const isPrime = (n) => {    
  if (n < 2) return false;
  
  for (let i = 2 ; i <= n**0.5 ; i++) {
    if (!(n%i)) return false;
  }
  return true;
}

function solution(n, k) {
  return n.toString(k).split("0").filter(el => isPrime(el)).length
}

// 다른 사람의 풀이
// reduce메서드를 사용하여 풀이
function solution(n, k) {
  const numbers = n.toString(k).split('0').map(Number);
  
  return numbers.reduce((acc, num) => {
    if (num <= 1) {
      return acc;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return acc;
      }
    }
    return acc + 1;
  }, 0);
}