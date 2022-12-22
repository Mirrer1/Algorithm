const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = input.shift();
const list = input;

let result = '';
for (let i = 0; i < num; i++) {    
  const word = list[i].split(' ');  

  for (let j = 0; j < word.length; j++) {    
    if (word[j].length === 0) {
      result += word[j];
      continue;
    }    
    result += word[j].trim().split('').reverse().join('') + ' ';        
  }    
  result += '\n';
}
console.log(result);