const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(input) {
  let result = '';
  for (let i = 0; i < input; i++) {    
    for (let j = 0; j <= i; j++) {
      result += '*'      
    }    
    result += '\n';
  }
  console.log(result);
}