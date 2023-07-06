function solution(order) {
  let answer = 0;
  let idx = 0;
  const tempBelt = [];

  for (let box = 1; box <= order.length; box++) {
    if (box !== order[idx]) {
      tempBelt.push(box);
      continue;
    }

    answer++;
    idx++;
    
    while (tempBelt.length && tempBelt.at(-1) === order[idx]) {
      tempBelt.pop();
      answer++;
      idx++;
    }
  }
  return answer;
}