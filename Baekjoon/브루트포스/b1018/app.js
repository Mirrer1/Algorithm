const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [row, col] = input.shift().split(' ').map(v => +v);
const list = input;
const result = [];
const line = ['WBWBWBWB', 'BWBWBWBW'];

for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {
    for (let z = 0; z < 2; z++) {
      let count = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = list[i + x][j + y];
          if (current !== line[(x + z) % 2][y]) count++;
        } 
      }
      result.push(count);
    }
  }  
}

console.log(Math.min(...result));