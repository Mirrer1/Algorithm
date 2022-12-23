const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(v => v.trim());

const lStack = input.shift().split('');
const rStack = [];
const num = +input.shift();

for (let i = 0; i < num; i++) {
  const [cmd, value] = input[i].split(' ');
  
  if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
  else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
  else if (cmd === "B") lStack.pop();
  else if (cmd === "P") lStack.push(value); 
}

let result = lStack.join('');
result += rStack.reverse().join('');
console.log(result);