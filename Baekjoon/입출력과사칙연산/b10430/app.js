const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

input = input.split(' ').map((item) => +item);
solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C) * (B%C))%C);
};