function solution(numbers) {    
  numbers.sort((a, b) => b - a);
  
  const num1 = numbers[0] * numbers[1];
  const num2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  
  return Math.max(num1, num2);
}