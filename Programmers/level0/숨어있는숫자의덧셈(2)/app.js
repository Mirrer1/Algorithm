function solution(my_string) {
  let result = '';
  
  for (let i = 0; i < my_string.length; i++) {
      if (Number.isInteger(+my_string[i])) result += my_string[i];
      else result += ' ';
  }
  
  return result.split(' ').map(v => +v).reduce((a, b) => a + b, 0);
}