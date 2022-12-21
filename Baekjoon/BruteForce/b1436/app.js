const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const result = [];
let i = 666;

while (true) {
  if (input === result.length) break;

  if (i.toString().includes('666')) result.push(i);      
  i++;
}
console.log(result[input - 1]);