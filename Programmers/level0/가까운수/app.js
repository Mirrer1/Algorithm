function solution(array, n) {
  const diff = [];    
  
  array.forEach(v => {
      diff.push(Math.abs(v - n));        
  })
  
  return array[diff.indexOf(Math.min(...diff))];
}