const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(v => +v);
const list = input[1].split(' ').map(v => +v);
let count = 0;
let target;

function merge(leftArr, rightArr) {
  let result = [];
  let [i, j] = [0, 0];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while(j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
    count++;
    if (count === K) target = result[result.length - 1];
  }

  return result;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

mergeSort(list);
console.log(!target ? -1 : target);