const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
const list = input;

list.sort((a, b) => a.length - b.length || a.localeCompare(b));
const result = new Set(list);
console.log(Array.from(result).join('\n'));