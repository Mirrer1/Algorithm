function factorial(num) {
  if (num <= 0) return 1;
  
  return num * factorial(num - 1);
}

function solution(n) {
  let i = 0;
  
  while (true) {
      if (factorial(i) === n) return i;
      else if (factorial(i) >= n) return i - 1;
      
      i++;
  }
}

function solution(n) {
  let i = 1;
  let f = 1;
    
  while (f * i < n) f *= ++i;
  return i;
}