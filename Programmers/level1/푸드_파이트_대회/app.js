// 나의 풀이
function solution(food) {  
  const answer = [0];
  
  for(let i = food.length; i > 0; i--) {  
    let cnt = Math.floor(food[i] / 2);
    
    for(let j = 0; j < cnt; j++) {          
        answer.push(i);          
        answer.unshift(i);
      }
  };  
  return answer.join('');
}

// 다른 사람의 풀이
// for문안에서 모든 연산을 수행하여 간결하게 작성
function solution(food) {
  let res = '';
  
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i]/2));
  }
  
  return res + '0' + [...res].reverse().join('');
}