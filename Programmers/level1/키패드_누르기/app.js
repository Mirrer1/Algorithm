// 나의 풀이
function solution(numbers, hand) {      
  function findKey(key) {
    let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === key) return [i, j];
      }
    }
  }
  
  let answer = '';
  let left = '*';
  let right = '#';

  for (let i of numbers) {
    if (i === 1 || i === 4 || i === 7) {
      answer += 'L';
      left = i;
    } else if (i === 3 || i === 6 || i === 9) {
      answer += 'R';
      right = i - 2;
    }else {
      let r = findKey(right);
      let l = findKey(left);
      let middle = findKey(i);
      
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);

      if (rr === ll) { 
        hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
      }else if(rr > ll) { 
        answer += 'L';
        left = i;
      }else { 
        answer += 'R';
        right = i;
      }
    }
  }
  
  return answer;
}

// 다른 사람의 풀이
// 불필요한 정보는 보지 않고, 계산하지  않도록 mapping
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}