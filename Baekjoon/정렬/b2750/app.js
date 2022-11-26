const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
input.sort((a, b) => a - b);
for (let i = 0; i<input.length; i++){
  console.log(input[i])
}