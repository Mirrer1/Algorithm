function solution(my_string) {              
  const result = [...my_string].map(v => v >= 'a' && v <= 'z' ? v.toUpperCase() : v.toLowerCase());
  
  return result.join('');
}