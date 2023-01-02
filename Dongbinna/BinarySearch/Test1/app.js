const [N, target] = [10, 3];
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // 4 

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};

const result = binarySearch(arr, target, 0, N - 1);
console.log(result === -1 ? '배열에 N이 존재하지 않습니다.' : result + 1);