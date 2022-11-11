const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let  input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(input) {
  let answer = input;
  let count = 0;
  
  while (true) {
    let sum = Math.floor(answer / 10) + (answer % 10);                
    answer = (answer % 10) * 10 + (sum % 10);
    count++;      
    
    if (input === answer) break;
  }
  
  console.log(count);
}

