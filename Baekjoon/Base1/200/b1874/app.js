const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

const num = input.shift();
const list = input;

const stack = [];
let result = [];
let start = 1;

for (let i = 0; i < num; i++) {
  let outNum = list[i];

  while(start <= outNum) {
    stack.push(start);
    start++;
    result.push('+');
  }

  const stackPop = stack.pop();
  result.push('-');

  if (stackPop !== outNum) {
    result = ['NO'];
    break;
  }
}

console.log(result.join('\n'));