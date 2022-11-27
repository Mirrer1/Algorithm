const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

const sortArr = input.sort((a, b) => a - b);
const avg = sortArr.reduce((a, b) => a + b, 0) / 5;
console.log(avg + '\n' + sortArr[2]);