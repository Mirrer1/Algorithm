// 나의 풀이
function solution(n, arr1, arr2) {
  const answer = [];
  
  for (let i = 0; i < n; i++) {  
    let tmp_1 = arr1[i].toString(2);
    let tmp_2 = arr2[i].toString(2);
    let final = '';

    tmp_1 = '0'.repeat(n - tmp_1.length) + tmp_1
    tmp_2 = '0'.repeat(n - tmp_2.length) + tmp_2      
    
    for (let j = 0; j < n; j++) {          
      if (tmp_1[j] == 1 || tmp_2[j] == 1) final += '#'
      else final += ' '
    }
    answer.push(final);
  }
  return answer;
}

// 다른 사람의 풀이
// 정규표현식 사용
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
}