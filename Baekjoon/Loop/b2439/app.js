const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(input) {
  let result = '';
  for (let i = 0; i < input; i++) {    
    for (let j = (input - 1); j >= 0; j--) {
      result += j > i ? ' ' : '*';
    }    
    result += '\n';
  }
  console.log(result);
}