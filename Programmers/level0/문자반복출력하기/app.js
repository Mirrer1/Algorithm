function solution(my_string, n) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
      result += my_string[i].repeat(n);
  }
  return result;
}

function solution(my_string, n) {
  const result = [...my_string].map(v => v.repeat(n)).join('');
  return result;    
}