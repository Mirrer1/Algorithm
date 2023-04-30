// 나의 풀이
function solution(babbling) {
  const can = ['aya','ye','woo','ma'];
  let count = 0;
  
  for(let i = 0; i < babbling.length; i++){
    let babble = babbling[i];
    
    for(let j = 0; j < can.length; j++){
      if(babble.includes(can[j].repeat(2))) break;          
      babble = babble.split(can[j]).join(" ");
    }
    
    if(babble.split(" ").join("").length === 0){
      count += 1;
    }
  }
  
  return count;
}

// 다른 사람의 풀이
// 정규표현식을 사용하여 간결하게 풀이
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}