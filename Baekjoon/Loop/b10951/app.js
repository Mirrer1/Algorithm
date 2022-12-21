const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {  
  for (let i = 0; i < input.length - 1; i++) {
    let [ num1, num2 ] = input[i].split(' ').map((v) => +v);
    console.log(num1 + num2);
  }  
}