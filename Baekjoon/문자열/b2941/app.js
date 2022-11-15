const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const RegExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(RegExp,' ');
console.log(result.length);