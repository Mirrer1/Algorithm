const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const count = Array(10).fill(0);
let sorted = [];

for (let i = 0; i < arr.length; i++) {
  count[arr[i]]++;  
};

for (let i = 0; i < count.length; i++) {
  const sortedNum = Array(count[i]).fill(i);
  sorted = sorted.concat(sortedNum);
}

console.log(sorted.join(' '));