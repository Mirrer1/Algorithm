const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {  
  for (let i = 0; i < input.length; i++) {
    let [ num1, num2 ] = input[i].split(' ').map((v) => +v);
    let result = num1 + num2
    result > 0 && console.log(result);
  }  
}