const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(A) {
  if (A >= 90) console.log('A');
  else if (A >= 80) console.log('B');
  else if (A >= 70) console.log('C');
  else if (A >= 60) console.log('D');
  else console.log('F');
}