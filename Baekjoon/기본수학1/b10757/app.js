const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);
console.log((num1 + num2).toString());