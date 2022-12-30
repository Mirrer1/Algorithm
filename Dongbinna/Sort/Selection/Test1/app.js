const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arr.length; i++) {
  let min_index = i;
  
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min_index] > arr[j]) {
      const temp = arr[min_index];
      arr[min_index] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr.join(' '));