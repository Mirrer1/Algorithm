const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

let isBrackets = false;
let result = '';
let temp = '';

for (let i = 0; i < input.length; i++) { 
  const word = input[i];
  if (word === '<') {
    isBrackets = true;
    result += temp.split('').reverse().join('') + word;
    temp = '';
  } else if (word === '>') {
    isBrackets = false;
    result += temp + word;
    temp = '';
  } else if (word === ' ') {
    result += (!isBrackets ? temp.split('').reverse().join('') : temp) + ' ';
    temp = '';
  } else {
    temp += word;
  }
}

console.log(result + temp.split('').reverse().join('').replace(/\n/g, ''));