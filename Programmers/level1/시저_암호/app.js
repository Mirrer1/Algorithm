// 나의 풀이
// 아스키 코드 사용
function solution(s, n) {
  const space = 32;
  const A = 65;
  const Z = 90;
  const a = 97;
  const z = 122;

  return s
    .split("")
    .map(char => {
      const charCode = char.charCodeAt(0);
      if (charCode === space) return " ";
      
      const newChar = charCode + n;
      if (charCode <= Z && newChar > Z) return String.fromCharCode(newChar - Z + A - 1);
      if (newChar > z) return String.fromCharCode(newChar - z + a - 1);
      return String.fromCharCode(newChar);
    })
    .join("");
}

// 다른 사람의 풀이
// 아스키코드 대신 배열의 인덱스 사용
function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer= '';

  for(let i =0; i < s.length; i++) {
      const text = s[i];
      
      if(text == ' ') {
          answer += ' '; 
          continue;
      }

      const textArr = upper.includes(text) ? upper : lower;
      const index = textArr.indexOf(text)+n;
      if(index >= textArr.length) index -= textArr.length;
      answer += textArr[index];
  }
  return answer;
}