const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const list = input.slice(1);
solution(num, list);

function solution(num, list) {  
  for (let i = 0; i < num; i++) {
    let score = 0;
    let sum = 0;

    for (let j = 0; j < list[i].length; j++) {      
      (list[i][j] === 'O') ? score++ : score = 0;
      sum += score;
    }
    console.log(sum);
  }
}