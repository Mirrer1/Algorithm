const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(v => v.trim());

const num = +input.shift();
const queue = [];
const result = [];

for (let i = 0; i < num; i++) {
  const [cmd, value] = input[i].split(' ');  
  
  if (cmd === 'push') queue.push(+value);  
  else if (cmd === 'pop') result.push(queue.length === 0 ? -1 : queue.shift());
  else if (cmd === 'size') result.push(queue.length);
  else if (cmd === 'empty') result.push(queue.length === 0 ? 1 : 0);
  else if (cmd === 'front') result.push(queue.length === 0 ? -1 : queue[0]);
  else if (cmd === 'back') result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
}

console.log(result.join('\n'));