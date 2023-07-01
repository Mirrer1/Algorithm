function solution(topping) {
  const allTopping = new Map();
  const bro = new Map();
  let answer = 0;
  
  topping.forEach((n) => {
    allTopping.set(n, (allTopping.get(n) || 0) + 1);
  });

  for (let n of topping) {    
    allTopping.set(n, allTopping.get(n) - 1);    
    bro.set(n, true);
    
    if (!allTopping.get(n)) allTopping.delete(n);    
    if (allTopping.size === bro.size) answer++;    
    if (allTopping.size < bro.size) break;
  }

  return answer;
}