// 나의 풀이
function solution(keymap, targets) {
  const answer = [];  
  const keyMap = new Map();

  keymap.forEach((map) => {
    for (let i = 0; i < map.length; i++) {
      if (keyMap.has(map[i])) {
        const idx = Math.min(i + 1, keyMap.get(map[i]));
        keyMap.set(map[i], idx);
      } else {
        keyMap.set(map[i], i + 1);
      }
    }
  });
  
  targets.forEach((target) => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      const temp = keyMap.get(target[i]);
      if (temp) cnt += temp;
      else {
        cnt = -1;
        break;
      }
    }
    answer.push(cnt);
  });

  return answer;
}

// 다른 사람의 풀이
// reduce 메서드를 사용해서 간결하게 풀이
function solution(keymap, targets) {
  const answer = [];
  const map = {};

  for (const items of keymap) {
    items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
  }
  for (const items of targets) {
    answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
  }
  return answer;
}
