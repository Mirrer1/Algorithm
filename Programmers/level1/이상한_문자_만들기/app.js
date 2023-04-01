// 나의 풀이
function solution(s) {
  const words = s.split(' ');
  let answer = '';
  
  for (let i = 0; i < words.length; i++) {
    for(let j = 0; j < words[i].length; j++) {
      if(j % 2 === 0) answer += words[i][j].toUpperCase();
      else answer += words[i][j].toLowerCase();          
    }
    
    if (i < words.length -1) answer += ' ';
  }
  return answer;
}

// 다른 사람의 풀이
// 정규 표현식 사용
function toWeirdCase(s){  
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}