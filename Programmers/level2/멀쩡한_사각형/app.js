// 나의 풀이
function gcd(w, h) {
  const mod = w % h;  
  if (mod === 0) return h;  

  return gcd(h, mod);
}

function solution(w, h) {
  const gcdVal = gcd(w, h);
  
  return w * h - (w + h - gcdVal);
}

// 다른 사람의 풀이
// 기울기를 사용하여 간결하게 풀이
function solution(w,h){
  const slope = h / w;
  let result = 0;

  for(let i = 1; i <= w; i++){
    result += Math.ceil(slope * i);
  }

  return ((h * w) - result) * 2;
}