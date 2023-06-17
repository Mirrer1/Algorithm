// 나의 풀이
function solution(n, t, m, p) {
  let answer = '';
  const numSet = [];  
  
  for (let i = 0; i < t * m; i++) {
    numSet.push(i.toString(n));
  }
  
  const numStr = numSet.join("");  
  
  for(let j = 0; j < t * m; j++) {
    if (j % m === p - 1) {
      answer = answer + numStr[j].toUpperCase();
    }
  }
  
  return answer;
}

// 다른 사람의 풀이
// apply 메서드를 사용
function solution(n, t, m, p) {
  const tubeT = Array.apply(null,Array(t)).map((a, i) => i * m + p - 1);
  let line = '';
  const max = m * t + p;
  
  for (let i = 0; line.length <= max; i++) {
    line += i.toString(n);
  }
  return tubeT.map(a=>line[a]).join('').toUpperCase();
}