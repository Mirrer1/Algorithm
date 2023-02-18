function solution(i, j, k) {
  let count = 0;
  
  for (let z = i; z <= j; z++) {
      const nums = (z + '').split('').map(v => +v);
      count += nums.filter(v => v === k).length;        
  }
  
  return count;
}