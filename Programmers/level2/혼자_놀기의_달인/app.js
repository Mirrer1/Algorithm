function solution(cards) {
  const visited = Array(cards.length + 1).fill(0);
  visited[0] = 1;

  let [group, result] = [[], []];
  let idx = cards[0];

  while (1) {
    if (visited.indexOf(0) === -1) {
      result.push(group);
      break;
    } else if (!visited[idx]) { 
      visited[idx] = 1;
      group.push(idx);
      idx = cards[idx - 1];
    } else {
      idx = visited.indexOf(0);
      result.push(group);
      group = [];
    }
  }
  result.sort((a, b) => b.length - a.length);
  return result.length !== 1 ? result[0].length * result[1].length : 0;
}