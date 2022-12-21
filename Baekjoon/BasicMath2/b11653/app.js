const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;

for (let i = 2; i <= input; i++) {
  if (input % i === 0) {
    console.log(i);
    input = input / i;
    i = 1;
  }
}