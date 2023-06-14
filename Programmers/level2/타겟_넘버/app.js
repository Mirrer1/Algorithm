function solution(numbers, target) {
  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) {
        return 1;
      }
      return 0;
    }
    
    const plus = dfs(index + 1, sum + numbers[index]);
    const minus = dfs(index + 1, sum - numbers[index]);
    return plus + minus;
  };
  
  return dfs(0, 0);
}