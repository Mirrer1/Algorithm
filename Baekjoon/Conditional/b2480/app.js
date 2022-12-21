const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  let resultMoney = 0;
  if (A === B && A === C && B === C) {
    resultMoney = 10000 + A * 1000;
  } else if (A === B || A === C || B === C) {
    (A === B || A === C) ? resultMoney = 1000 + A * 100 : resultMoney = 1000 + B * 100;
  } else {
    resultMoney = Math.max(A, B, C) * 100
  }
  console.log(resultMoney);
}