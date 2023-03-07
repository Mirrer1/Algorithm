function solution(p) {    
  let [x, c] = p.split('+').reduce(([a,b],s) => {
      if (s.includes('x')) {
          return [a + Number(s.trim().replace('x','') || 1), b];
      }
      return [a, b + Number(s)];
  }, [0, 0]);
  
  if (!x && !c) return '0';    
  if (!x) return c.toString();  
  x = `${x==1?'':x}x`;      
  if (!c) return x;    
  return `${x} + ${c}`;
}