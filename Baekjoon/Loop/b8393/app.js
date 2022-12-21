const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];
solution(input);

function solution(num) {
  let result = 0;
  for(let i = 1; i <= num; i++) {    
    result += i;
  }
  console.log(result);
}