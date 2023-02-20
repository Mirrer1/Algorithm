function solution(my_string) {
  const str = my_string.split(" ");
  const stack = [];  
  let sign = 1;
    
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+") sign = 1;
    else if (str[i] === "-") sign = -1;
    else stack.push(str[i] * sign);
  }

  return stack.reduce((a,b) => a + b, 0);
}