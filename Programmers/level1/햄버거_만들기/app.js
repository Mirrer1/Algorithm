// 나의 풀이
function solution(ingredient) {
  const stack = [];
  let cnt = 0;
  
  ingredient.forEach((ing, idx)=>{
    stack.push(ing);  
    
    if(stack.length >= 4){
      const find = stack.slice(-4).join('');
      if(find === '1231'){
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();   
        cnt++;
      }
    } 
  })
  
  return cnt;
}

// 다른 사람의 풀이
// for문에 index를 되돌리는 방법
function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join('') === '1231') {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}