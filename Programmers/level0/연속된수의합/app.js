// 나의 풀이
function solution(num, total) {
  let answer = [];
  let ceilNum = Math.ceil(total / 2);
  
  while (true) {
    for (let i = num; i > 0; i--) {
      answer.push(ceilNum - i);
    };
    
    let sum = answer.reduce((acc, cur) => acc + cur, 0);
    
    if (sum === total) break;
    else if (sum < total) ceilNum++;
    else ceilNum--;
    answer = [];
  }
  return answer;
}

// 다른 사람의 풀이
function solution(num, total) {
  const min = Math.ceil(total/num - Math.floor(num/2));
  const max = Math.floor(total/num + Math.floor(num/2));

  return new Array(max - min + 1).fill(0).map((v,i)=>{return i + min;});
}