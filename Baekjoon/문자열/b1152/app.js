const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

const result = input.trim().split(' ');
result[0] === '' ? console.log(0) : console.log(result.length);