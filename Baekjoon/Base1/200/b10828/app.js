const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
const list = input.map(v => v.split(' '));

const stack = [];
const result = [];

for (let i = 0; i < num; i++) {
  const command = list[i][0];
  
  switch (command) {
    case 'push':
      console.log('push');
      break;
    case 'pop':
      console.log('pop');
      break;
    case 'size':
      console.log('size');
      break;
    case 'empty':
      console.log('empty');
      break;
    case 'top':
      console.log('top');
      break;
    default:
      console.log('default');
      break;
  }      
}
