const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

input.slice(1).sort((a, b) => a - b).forEach(v => console.log(v));