// function isPrimeNumber(n) {
//   for (let i = 2; i < n; i++) {
//     if(n % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrimeNumber(7) ? '소수입니다.' : '소수가 아닙니다.');

function isPrimeNumber(n) {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeNumber(7) ? '소수입니다.' : '소수가 아닙니다.');