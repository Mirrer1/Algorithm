// 반복적으로 구현한 n!
function factorial_iterative(n) {
  let result = 1;
  
  for (let i = 0; i <= n; i++) {
    if (i <= 1) result *= 1;
    else result *= i;
  }  
  
  return result;
};

// 재귀적으로 구현한 n!
function factorial_recursive(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial_iterative(3));
console.log(factorial_recursive(3));