function solution(my_str, n) {
  const str = my_str.split('');
  const result = [];
  
  while (str.length > 0) {
      result.push(str.splice(0, n).join(''));
  }
  
  return result;    
}