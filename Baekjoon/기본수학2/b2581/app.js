const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let primeNumbers = [];
let sum = 0;

for(let target = a; target <= b; target++){
    for(let p = 2; p <= target; p++){
        if(p*p > target){
            primeNumbers.push(target);
            sum += target;
            break;
        }
        if(target % p === 0){
            break;
        }
    }
}
if(primeNumbers.length === 0){
    console.log(-1);
}else{
    console.log(sum);
    console.log(primeNumbers[0]);
}
