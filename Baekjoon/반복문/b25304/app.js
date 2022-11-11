const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let total = +input[0];
let cnt = +input[1];
let list = input.slice(2);

solution(total, cnt, list);

function solution(total, cnt, list) {  
  let sum = 0;
  for (let i = 0; i < cnt; i++) {
    let [price, num] = list[i].split(' ');
    sum += (+price * +num);
  }
  sum === total ? console.log('Yes') : console.log('No');
}