const input = 'K1KA5CB7';

let str = [];
let sum = 0;
let result = '';

for (let i = 0; i < input.length; i++) {  
  if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
    str.push(input[i]);
  } else {
    sum += (+input[i]);
  }  
}

result += (str.sort().join('') + sum);
console.log(result);