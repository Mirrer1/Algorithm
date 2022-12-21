const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map((v) => +v);

const afternoon = input[0];
const night = input[1];
const tall = input[2]; 

console.log(Math.ceil((tall - night) / (afternoon - night)));