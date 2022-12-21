const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map((v) => +v);
solution(list);

function solution(list) {
  console.log(Math.min(...list), Math.max(...list));  
}