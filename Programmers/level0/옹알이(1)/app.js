// 나의 풀이
function solution(babbling) {  
  const correctList = ["aya", "ye", "woo", "ma"];

  const returnData = babbling.filter(val => {
      let result = val;
      
      correctList.forEach(coval => {
          if (val.includes(coval)) result = result.replace(coval, '')
      });

      return !result;
  })
  
  return returnData.length;
}

// 다른 사람의 풀이
function solution(babbling) {
  let answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })

  return answer;
}