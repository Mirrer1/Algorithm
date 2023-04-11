// 나의 풀이
function solution(s) {  
  const charObj = {};
  const answer = [];
    
  for (let i = 0; i < s.length; i++) {  
    if (charObj[s[i]] === undefined) answer.push(-1);
    else answer.push(i - charObj[s[i]]);
    
    charObj[s[i]] = i;
  }

  return answer;
}

// 다른 사람의 풀이
// 구조분해할당, 삼항연산자로 간결하게 표현
function solution(s) {
  const hash = {};

  return [...s].map((v, i)=>{
      let result = hash[v] !== undefined ? i - hash[v] : -1;
      hash[v] = i;
      
      return result;
  });
}