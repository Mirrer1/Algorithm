function solution(progresses, speeds) {
  const result = [];
  let arr = progresses.map((a, i)=> Math.ceil((100 - a) / speeds[i]));
  let cnt = 1;
  let val = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[val] >= arr[i]) {
      cnt +=1;
    } else {
      result.push(cnt);
      val += cnt
      cnt = 1;
    }

    if( i == arr.length - 1) result.push(cnt);
  }

  return result;
}