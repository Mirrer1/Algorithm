// 나의 풀이
function solution(denum1, num1, denum2, num2) {    
  const topNum = num1 * denum2 + num2 * denum1;    
  const botNum = num1 * num2;
  let maximum = 1;
  
  for(let i = 1 ; i <= topNum ; i ++) {
      if(topNum % i === 0 && botNum % i === 0) maximum = i;
  };
  
  return [topNum / maximum, botNum / maximum];
}

// 다른 사람의 풀이
function fnGCD(a, b){
  return (a % b)? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    const gcd = fnGCD(denum, num);

    return [denum / gcd, num / gcd];
}