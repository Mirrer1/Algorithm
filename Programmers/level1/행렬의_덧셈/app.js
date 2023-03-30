// 나의 풀이
function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
      const temp = [];

      for (let j = 0; j < arr1[i].length; j++) temp.push(arr1[i][j] + arr2[i][j]);
      result.push(temp);
  }

  return result;
}

// 다른 사람의 풀이
// 화살표함수와 map함수를 사용하여 간견하게 표현
function sumMatrix(A,B){
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}