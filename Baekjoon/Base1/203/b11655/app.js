const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('');

let result = '';
for (let i = 0; i < input.length; i++) {
  const unicode = input[i].charCodeAt();

  if (unicode >= 65 && unicode <= 90) {
    unicode + 13 > 90 
    ? result += String.fromCharCode((unicode + 13) - 26) 
    : result += String.fromCharCode(unicode + 13);
  } else if(unicode >= 97 && unicode <= 122) {
    unicode + 13 > 122
    ? result += String.fromCharCode((unicode + 13) - 26) 
    : result += String.fromCharCode(unicode + 13);
  } else {
    result += input[i];
  }
};

console.log(result);