const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

const findNum = +input;
let num = 1;
let count = 1;

while (true) {
  if (num >= findNum) {
    console.log(count);
    break;
  }
  num = num + (count * 6);
  count++;
}