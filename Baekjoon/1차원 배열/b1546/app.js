const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const list = input[1].split(' ').map((v) => +v);
solution(num, list);

function solution(num, list) {
  let result = 0;
  const max = Math.max(...list)
  list.map((v) => result += v / max * 100);
  console.log(result / num);  
}