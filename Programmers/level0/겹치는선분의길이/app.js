// 나의 풀이
function solution(lines) {
  let result = 0;
  const lineMap = new Array(200).fill(0);

  for (let i = 0; i < 3; i++) {
    const left = lines[i][0];
    const right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      result += 1;
    }
  }

  return result;
}

// 다른 사람의 풀이
// start와 end에 해당하는 공간을 모두 채운 뒤 
// 두번 이상 채워진 건 겹쳐진 것이므로 그것의 갯수를 이용
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for(; a < b; a++) line[a+100]++;
  });

  return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}
