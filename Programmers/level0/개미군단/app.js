function solution(hp) {
  const five = Math.floor(hp / 5);
  const third = Math.floor((hp % 5) / 3);
  const one = (hp % 5) % 3;
  
  return five + third + one;
}