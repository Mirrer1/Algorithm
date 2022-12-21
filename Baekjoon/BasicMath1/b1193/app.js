const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

let num = +input;
let groupCount = 1;

while (true) {  
  if (num <= groupCount) {
    break;
  }

  num -= groupCount;
  groupCount++;  
};

if (groupCount % 2 === 0) {
  console.log(`${1 + (num - 1)}/${groupCount - (num - 1)}`);
} else {
  console.log(`${groupCount - (num - 1)}/${1 + (num - 1)}`);
}