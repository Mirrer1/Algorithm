// 나의 풀이
function solution(arr) {
  if (arr.length === 1) return [-1];
  
  let i = 0;
  for (let j = 0; j < arr.length; j += 1) {
    if (arr[i] > arr[j]) i = j;
  }
  arr.splice(i, 1);
  return arr;
}

// 다른 사람의 풀이
// 스프레드 연산자를 사용하여 간결하게 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if(arr.length<1)return[-1];
  
  return arr;
}
