function solution(bin1, bin2) {
  const num1 = parseInt(bin1, 2);
  const num2 = parseInt(bin2, 2);    
  
  return (num1 + num2).toString(2);
}
[].indexOf