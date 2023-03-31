// 나의 풀이
function solution(n, m) {
  const result = [];  
  let G = 0;
  let L = 0;  
  let num = n > m ? n : m;
  
  for (let i = 1; i <= num; i++) {
      if (n % i == 0 && m % i == 0) G = i;
  }
  
  L = n * m / G ;
  result.push(G, L);
  
  return result;
}

// 다른 사람의 풀이
// for문 사용
function gcdlcm(a, b) {
  let r;

  for(let ab= a * b; r = a % b; a = b, b = r) {}
  return [b, ab/b];
}