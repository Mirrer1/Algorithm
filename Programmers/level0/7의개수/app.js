function solution(array) {
  let result = 0;
  
  for (let i = 0; i < array.length; i++) {
    result += (array[i] + '').split('').filter(v => +v === 7).length;
  }
  
  return result;
}

function solution(array) {    
  return array.join('').split('7').length - 1;
}