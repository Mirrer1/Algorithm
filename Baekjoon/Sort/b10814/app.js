const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
const result = input.sort((a, b) => parseInt(a) - parseInt(b));
console.log(result.join('\n'));