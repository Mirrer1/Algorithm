const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const num1 = input[0].split('').reverse().join('');
const num2 = input[1].split('').reverse().join('');
console.log(Math.max(+num1, +num2));