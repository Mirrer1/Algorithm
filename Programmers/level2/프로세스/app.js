function solution(priorities, location) {
  const arr = []
  let result = 0;
  let max_value = Math.max(...priorities);
  
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  };

  while (priorities.length != 0) {
    max_value = Math.max(...priorities);
      
    if (priorities[0] < max_value) {
      priorities.push(priorities.shift());
      arr.push(arr.shift());
    }else {
      result++;
      priorities.shift();

      if (arr.shift() == location) return result;
    }
  }
}