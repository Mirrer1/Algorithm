const [N, X] = [7, 2];
const arr = [1, 1, 2, 2, 2, 2, 3];

function leftIndex(start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= X) end = mid;
    else start = mid + 1;
  }
  return end;
}

function rightIndex(start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > X) end = mid;
    else start = mid + 1;
  }
  return end;
}

const left = leftIndex(0, N);
const right = rightIndex(0, N);
console.log(right - left === 0 ? -1 : right - left);