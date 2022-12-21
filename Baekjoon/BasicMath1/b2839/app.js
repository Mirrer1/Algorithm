const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString();

input = +input;
let threeKg = 0;

while (true) {
  if (input % 5 === 0) {
    console.log((input / 5) + threeKg);
    break;
  }

  if (input < 0) {
    console.log(-1);
    break;
  }

  input -= 3;
  threeKg++;
}