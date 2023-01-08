const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('');

const stack = [];
let result = '';

for (let i = 0; i < input.length; i++) {
  const word = input[i];

  if (word >= 'A' && word <= 'Z') result += word;
  else if (word === '(') stack.push(word);
  else if (word === ')') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      result += stack.pop();
    }
    stack.pop();
  }
  else if (word === '+' || word === '-') {
    while (stack.length && stack[stack.length - 1] !== '(') {
      result += stack.pop();
    }
    stack.push(word);
  }
  else if (word === '*' || word === '/') {
    while (stack.length && stack[stack.length - 1] === '*' || stack[stack.length - 1] === "/") {
      result += stack.pop();
    }
    stack.push(word);
  }
}

while (stack.length) result += stack.pop();
console.log(result);