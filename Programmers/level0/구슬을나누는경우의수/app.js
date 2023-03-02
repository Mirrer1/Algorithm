function factorial(n){
  const bigN = BigInt(n);
  
  if(bigN <= BigInt(1)) return BigInt(1);    
  return bigN * factorial(bigN - BigInt(1));
}

function solution(balls, share) {
  const n = balls;
  const m = share;
  
  return factorial(n) / (factorial(n - m) * factorial(m));  
}