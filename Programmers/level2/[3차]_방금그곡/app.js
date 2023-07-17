function solution(m, musicinfos) {
  const arr = musicinfos.map((mi) => {
    const [start, end, title, code] = mi.split(",");
    const hour = end.slice(0, 2) - start.slice(0, 2);
    const minute = end.slice(3) - start.slice(3);
    const runtime = 60 * hour + minute;

    const codeArr = code.match(/[A-Z]#?/g);
    let stream = code.repeat(Math.floor(runtime / codeArr.length));
    stream += codeArr.slice(0,runtime % codeArr.length).join("");
    return [title, runtime, stream];
  });

  const answer = arr.filter(([_, __, stream]) => {
    let i = stream.indexOf(m);
    if (i === -1) return false;
    while (i !== -1) {
      if (stream[i + m.length] !== "#") return true;
      i = stream.indexOf(m, i + 1);
    }
  });
  if (!answer.length) return "(None)";

  answer.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  });
  return answer[0][0];
}