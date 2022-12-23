const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(v => v.trim());

const num = +input.shift();
const deque = [];
const result = [];

for (let i = 0; i < num; i++) {
  const [cmd, value] = input[i].split(' ');
  
  if (cmd === 'push_front') deque.unshift(+value);
  else if (cmd === 'push_back') deque.push(+value);  
  else if (cmd === 'pop_front') deque.length === 0 ? result.push(-1) : result.push(deque.shift());
  else if (cmd === 'pop_back') deque.length === 0 ? result.push(-1) : result.push(deque.pop());
  else if (cmd === 'size') result.push(deque.length);  
  else if (cmd === 'empty') deque.length === 0 ? result.push(1) : result.push(0);
  else if (cmd === 'front') deque.length === 0 ? result.push(-1) : result.push(deque[0]);
  else if (cmd === 'back') deque.length === 0 ? result.push(-1) : result.push(deque[deque.length - 1]);
}

console.log(result.join('\n'));