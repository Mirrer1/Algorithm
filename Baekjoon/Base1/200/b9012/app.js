const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.trim());

const num = +input.shift();
const list = input;

const result = [];
for (let i = 0; i < num; i++) {  
  let count = 0;    
  for (let j = 0; j < list[i].length; j++) {        
    list[i][j] === '(' ? count++ : count--;

    if (count < 0) break;
  }
  count === 0 ? result.push('YES') : result.push('NO');
}

console.log(result.join('\n'));