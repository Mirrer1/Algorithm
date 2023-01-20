const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);
console.log(input);

const diff = input.reduce((a, b) => a + b, 0) - 100;
let result;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[i] + input[j] === diff) {
      result = input.filter(v => v !== input[i] && v !== input[j]);
      break;
    };
  };
  if (result) break;
};

console.log(result.sort((a, b) => a - b).join('\n'));