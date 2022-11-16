const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((v) => +v);
solution(input);

function solution(list) {
  const max = Math.max(...list)
  console.log(max);
  console.log(list.indexOf(max) + 1);
}