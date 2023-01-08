const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('');

const result = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  result[input[i].charCodeAt() - 97]++;  
}

console.log(result.join(' '));