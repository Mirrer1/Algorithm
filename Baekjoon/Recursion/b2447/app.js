const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

let result = '';

function star(row, col) {
  if (row % 3 === 1 && col % 3 === 1) {
    result += ' ';
  } else {
    if (Math.floor(row / 3) === 0 && Math.floor(col / 3) === 0) {
      result += '*';
    } else {
      star(Math.floor(row / 3), Math.floor(col / 3));
    }
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    star(i, j);
  }
  result += '\n';
}

console.log(result);