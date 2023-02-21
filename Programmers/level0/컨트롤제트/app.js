function solution(s) {
  const str = s.split(' ');
  const stack = [];    
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] === 'Z') stack.pop();
      else stack.push(+str[i]);
  }
  
  return stack.length ? stack.reduce((a, b) => a + b, 0) : 0;
  
  return result;
}