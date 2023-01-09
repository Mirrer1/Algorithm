const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const result = [];
result.push(input.shift() + input.shift());
result.push(input.shift() + input.shift());

console.log(result.map(v => +v).reduce((a, b) => a + b, 0));