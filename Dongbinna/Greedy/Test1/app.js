const array = [500, 100, 50, 10];
let n = 1260;
let count = 0;

for (let i = 0; i < array.length; i++) {
  count += Math.floor(n / array[i]);
  n %= array[i];
}

console.log(count);