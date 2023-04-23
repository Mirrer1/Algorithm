// 나의 풀이
function solution(lottos, win_nums) {
  let zeroCount = 0;
  let winCount = 0;

  lottos.forEach((item) => {
    if (item === 0) zeroCount++;
    else if (win_nums.includes(item)) winCount++;
  });

  let maxRank = Math.min(7 - (winCount + zeroCount), 6);
  let minRank = Math.min(7 - winCount, 6);

  return [maxRank, minRank];
}

// 다른 사람의 풀이
// 일치하는 번호의 수와 순위를 매칭 하기 위해 rank 배열 사용
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;
  let maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}