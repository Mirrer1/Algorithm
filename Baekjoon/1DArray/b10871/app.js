const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input[0].split(' ');
const list = input[1].split(' ').map((v) => +v);
solution(+num[1], list);

function solution(num, list) {  
  const answer = list.filter((v) => v < num).join(' ');
  console.log(answer);
}