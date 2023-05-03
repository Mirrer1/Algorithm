// 나의 풀이
function solution(s) {
  const arr = [];
  let x = 0;
  let y = 0;

  while (s.length > 0) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
      s[0] === s[i] ? x += 1 : y += 1;
      if (x === y) {
        count = i + 1;
        break;
      }
    }

    arr.push(s.slice(0, count));
    s = s.slice(count);
    if(count === 0) break;
  }

  return arr.length;
}

// 다른 사람의 풀이
// 재귀함수 사용
function solution(s, count=0) {
  if(!s) return count
  
  let [first, ...rest] = s.split("")
  let countSame = 1
  let countInSame = 0
  let i=0
  
  for(; i<rest.length; i++){
    if(rest[i] === first) countSame++
    else countInSame++
    if(countSame === countInSame) break
  }
  return solution(rest.slice(i+1).join(""), count+1);
}