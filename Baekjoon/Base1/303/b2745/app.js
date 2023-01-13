const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const num = input.shift();
const base = +input.shift();

console.log(parseInt(num, base));