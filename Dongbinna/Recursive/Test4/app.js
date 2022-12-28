function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
};

console.log(gcd(192, 162));