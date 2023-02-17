function solution(num, k) {  
  const result = (num + '').split('').map(v => +v).indexOf(k);
  return result !== -1 ? result + 1 : result;
}