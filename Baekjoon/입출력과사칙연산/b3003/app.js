const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

input = input.split(' ').map((item) => +item);
solution(input);

function solution(input) {
  const fullChess = [1, 1, 2, 2, 2, 8];
  const result = fullChess.map((v, i) => v - input[i]);
  console.log(result.join(' '));  
};