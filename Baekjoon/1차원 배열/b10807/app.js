const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const list = input[1].split(' ').map((v) => +v);    
solution(list, +input[2]);

function solution(list, num) {  
  const count = list.filter((v) => v === num).length;
  console.log(count);
}