function solution(numbers) {
  const numStr = [ 
      "zero", "one", "two", "three", "four", 
      "five", "six", "seven", "eight", "nine" 
  ];

  numStr.forEach((v, i) => {
      numbers = numbers.replaceAll(v, i);
  });

  return +numbers;

}