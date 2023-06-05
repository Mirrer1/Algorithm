// 나의 풀이
function solution(arr1, arr2) {
  const newArr = [];

  for(let i = 0; i < arr1.length; i++) {
    const result = [];
    for(let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      
      for(let k = 0; k < arr2.length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }

      result.push(elem);
    }    
    newArr.push(result);
  }
  return newArr;
}

// 다른 사람의 풀이
// map, reduce 메서드를 사용하여 간결하게 풀이
function solution(arr1, arr2) {
  return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}