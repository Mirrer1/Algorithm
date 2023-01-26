function solution(my_string) {
  const result = [];
  
  my_string.split('').forEach(v => {
      if (v >= 0 & v <= 9) result.push(v);
  });
  
  return result.map(v => +v).reduce((a, b) => a + b, 0);
}