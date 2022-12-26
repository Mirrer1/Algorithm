const N = 5;
const fear = [2, 3, 1, 2, 2];
fear.sort((a, b) => a - b);

let result = 0;
let count = 0;

for (let i = 0; i < fear.length; i++) {
  count++;

  if (count >= i) {
    result++;
    count = 0;
  }
}

console.log(result);