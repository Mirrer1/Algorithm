const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((v) => +v);
solution(input);

function solution(list) {
  const total = [...Array(30)].map((v, i) => i + 1);
  const answer = total.filter((v) => !list.includes(v));
  answer.map((v) => console.log(v));
}