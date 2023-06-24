// 나의 풀이
function solution(word) {
  const dics = ["A", "E", "I", "O", "U"];
  const tmp = [];

  let answer = 0;
  let cnt = 0;
  let flag = false;

  function DFS() {
    if (flag) return;
    if (tmp.length === 5 && tmp.join("") !== word) {
      return;
    }
    if (tmp.join("") === word) {
      answer = cnt;
      flag = true;
      return;
    }

    for (let i = 0; i < dics.length; i++) {
      tmp.push(dics[i]);
      cnt++;
      DFS();
      tmp.pop();
    }
  }

  DFS();
  return answer;
}

// 다른 사람의 풀이
// reduce 메서드를 사용하여 간결하게 풀이
function solution(words) {
  return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}