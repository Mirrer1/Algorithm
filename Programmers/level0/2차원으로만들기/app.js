function solution(num_list, n) {
  const result = [];
  
  while (num_list.length !== 0) {
      result.push(num_list.splice(0, n));
  }
  
  return result;
}