function solution(my_string) {
  const str = my_string.split('');
  const result = [];
  
  for (let i = 0; i < str.length; i++) {
      if (!result.includes(str[i])) result.push(str[i]);
  }
  
  return result.join('');
}

function solution(my_string) {    
  return [...new Set(my_string)].join('');
}