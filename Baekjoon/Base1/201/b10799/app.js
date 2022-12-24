const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

const stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') stack.push(input[i]);
  else {
    stack.pop();
    (input[i - 1] === '(') ? result += stack.length : result++;
  }
}

console.log(result);