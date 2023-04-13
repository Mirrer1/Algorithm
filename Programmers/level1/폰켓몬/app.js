// 나의 풀이
function solution(nums) {
  let answer = 0;
  const cnt = nums.length / 2;  
  const arr = nums.filter((e, i) => nums.indexOf(e) === i);
  
  arr.length >= cnt ? answer = cnt : answer = arr.length;  
  return answer;
}

// 다른 사람의 풀이
// Set 자료구조 사용
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}