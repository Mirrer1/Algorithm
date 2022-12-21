const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);

function solution(A, B) {
  const diff = A - B;
  (diff < 0) && console.log('<');
  (diff > 0) && console.log('>');
  (diff === 0) && console.log('==');  
}