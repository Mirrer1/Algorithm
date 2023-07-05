const solution = (arr) => {
  let zeroCount = 0;
  let oneCount = 0;

  const divide = (row, col, n) => {
    let canDivide = true;

    for (let y = row; y < row + n; y++) {
      for (let x = col; x < col + n; x++) {
        if (arr[row][col] !== arr[y][x]) canDivide = false;
      }
    };
    
    if (!canDivide) {
      const halfN = parseInt(n / 2);

      divide(row, col, halfN);
      divide(row, col+halfN, halfN);
      divide(row+halfN, col, halfN);
      divide(row+halfN, col+halfN, halfN);
    } else {
      if (arr[row][col]) oneCount += 1;
      else zeroCount += 1;
    }
  }
  
  const N = arr.length;
  divide(0, 0, N);
  return [zeroCount, oneCount];    
}