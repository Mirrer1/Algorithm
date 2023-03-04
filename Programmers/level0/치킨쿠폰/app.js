function solution(chicken) {
  let ch = chicken;
  let result = 0;
  
  while(ch > 9) {
      result += Math.floor(ch / 10);
      ch = Math.floor((ch / 10) + ( ch % 10));
  }
  
  return result;
}