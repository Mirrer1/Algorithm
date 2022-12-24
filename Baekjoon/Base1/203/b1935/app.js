const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input.shift();
const str = input.shift().trim().split('');
const list = input.map(v => +v);
const stack = [];

const eng = {};
for (let i = 0; i < num; i++) {
  eng[String.fromCharCode(i + 65)] = list[i];
}

const operators = ['+', '-', '*', '/'];
const calculator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const numWithStr = str.map(v => operators.includes(v) ? v : eng[v]);
for (let i = 0; i < str.length; i++) {
  let word = numWithStr[i];

  if (operators.includes(word)) {
    let back = stack.pop();
    let front = stack.pop();
    let calcFunc = calculator[word];
    word = calcFunc(front, back);
  }
  stack.push(word);
}

console.log(stack[0].toFixed(2));