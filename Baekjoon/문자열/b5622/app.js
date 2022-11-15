const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

const dialog = {
  3: "ABC", 4: "DEF", 5: "GHI", 6: "JKL",
  7: "MNO", 8: "PQRS", 9: "TUV", 10: "WXYZ",
};

let result = 0;
for (let i = 0; i < input.length; i++) {
  const word = input[i];
  for (let j = 3; j <= 10; j++) {
    if (dialog[j].includes(word)) {
      result += j;
    } 
  }
}
console.log(result);