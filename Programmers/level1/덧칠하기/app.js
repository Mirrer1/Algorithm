function solution(n, m, section) {
  let answer = 0;
  let check = section[0] + (m - 1);

  for (const val of section) {
    if (val <= check) continue;
    else {
        check = val + (m - 1);
        answer++;
    }
  }
  return answer + 1;
}