// 나의 풀이
function solution(numbers) {
  const answer = [];
  
  for (let i =0; i < numbers.length-1; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      const result = numbers[i] + numbers[j]
      if(answer.indexOf(result) == -1) answer.push(result);
    }  
  }

  answer.sort((a,b)=>a-b);
  return answer;
  }

// 다른 사람의 풀이
// 스프레드 연산자, Set 자료구조 사용
function solution(numbers) {
  const temp = []

  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          temp.push(numbers[i] + numbers[j])
      }
  }

  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b)
}