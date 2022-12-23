const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

let [N, K] = input;
let count = 1;

const queue = [...new Array(N)].map((_, i) => i + 1);
const josephus = [];

while (queue.length > 0) {
  let deleteItem = queue.shift();
  (count % K === 0) ? josephus.push(deleteItem) : queue.push(deleteItem);  

  count++;
}

console.log('<' + josephus.join(', ') + '>');