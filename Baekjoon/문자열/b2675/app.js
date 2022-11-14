const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0]
const list = input.splice(1);

for (let i = 0; i < num; i++) {
  let result = '';
  const [ N, word ] = list[i].split(' ');
  
  for (let j = 0; j < word.length; j++) {
    result += word[j].repeat(N);
  }
  console.log(result);
}