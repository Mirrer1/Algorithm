const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [ total, price ] = [...input[0].split(' ').map(v => +v)];
const score = input[1].split(' ').map(v => +v).sort((a, b) => b - a);
const result = score.splice(price - 1, 1);
console.log(result[0]);