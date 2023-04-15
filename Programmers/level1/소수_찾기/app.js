// 나의 풀이
function solution(n) {
  let answer = 0;
  const arr = new Array(n+1).fill(true);
  const end = Math.sqrt(n);
  
  for(let i = 2; i <= end; ++i){      
    if (arr[i] === false) continue; 
    
    for(let k = i * i; k <= n; k += i) {
      arr[k] = false;
    }
  }
  
  for(let i = 2; i <= n; ++i) {
      if(arr[i] === true) answer++;
  }

  return answer;
}

// 다른 사람의 풀이
// Set자료구조 사용
function solution(n) {
  const s = new Set();

  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }

  s.delete(1);
  s.add(2);

  for (let j = 3; j < Math.sqrt(n); j++) {
    if(s.has(j)){
      for(let k = j*2; k <= n; k += j) {    
        s.delete(k);
      }
    }
  }
  
  return s.size;
}