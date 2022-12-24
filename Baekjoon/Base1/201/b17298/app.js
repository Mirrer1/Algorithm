const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const list = input[1].split(' ').map(v => +v);
const stack = [];

for (let i = 0; i< num; i++) {
  while (stack.length !== 0 && list[i] > list[stack[stack.length - 1]]) {
    list[stack.pop()] = list[i];
  }
  stack.push(i);    
}

while (stack.length !== 0) {
  list[stack.pop()] = -1;
}

console.log(list.join(' '));