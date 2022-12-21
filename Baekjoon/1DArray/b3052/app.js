const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((v) => +v);
solution(input);

function solution(list) {
  const result = [];
  list.forEach((v) => result.indexOf(v % 42) === -1 && result.push(v % 42));
  console.log(result.length);
}