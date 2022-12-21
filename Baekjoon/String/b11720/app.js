const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const list = input[1].split('').map((v) => +v);
console.log(list.reduce((a, b) => a + b, 0));