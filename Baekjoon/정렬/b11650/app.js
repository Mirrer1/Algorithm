const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
const list = input.map(v => v.split(' ').map(v => +v));
let result = '';

list
.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
})
.forEach(v => result += `${v[0]} ${v[1]}\n`);
console.log(result);