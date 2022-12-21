const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let time = +input[0];
let list = input.slice(1);
solution(time, list);

function solution(time, list) {
  let result = '';
  for (let i = 0; i < time; i++) {
    let [ num1, num2 ] = list[i].split(' ');
    result += ((+num1) + (+num2)) + '\n' ;
  }
  console.log(result);
}
