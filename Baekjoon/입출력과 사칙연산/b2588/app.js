const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => item);
solution(input[0], input[1]);

function solution(A, B) {        
  for (let i = B.length - 1; i >= 0; i--) {    
    console.log(parseInt(A * B[i]));    
  } 
  console.log(parseInt(A * B));
};
