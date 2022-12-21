const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

const sortArr = input.slice(1).sort((a, b) => a - b).join('\n');
console.log(sortArr);