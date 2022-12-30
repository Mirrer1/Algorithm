const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;

      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        arr[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  return array;
}

console.log(quickSort(arr));