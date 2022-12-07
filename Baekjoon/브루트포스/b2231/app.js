const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

let i = 1;
while (i <= input) {  
  const apartSum = i.toString().split('').map(v => +v).reduce((a, b) => a + b, 0);    
  
  if (apartSum + i === input) {
    console.log(i);
    break;
  } 

  if (i === input) {
    console.log(0);
    break;
  }

  i++;
}