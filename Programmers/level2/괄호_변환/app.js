function solution(p) {  
  const checkBalance = w => {
    let balance = 0;

    for (const str of w) {
      if (str === '(') balance++;
      else balance--;
      
      if (balance < 0) return false;
    }
    return true;
  };
  
  const reversed = w => {
    const output = [];

    for (const str of w) {
      if (str === '(') output.push(')');
      else output.push('(');      
    }
    return output.join('');
  };
  
  const solve = w => {
      if (!w) return '';     
      
      let i = 0;
      let j = 0;

      while (i < w.length) {
        if (w[i] === '(') j++;
        else j--;

        if (!j) break;
        i++;
      }
      
      const u = w.slice(0, i + 1);
      const v = w.slice(i + 1);
      
      if (checkBalance(u)) return u + solve(v);
      return `(${solve(v)})${reversed(u.slice(1, -1))}`;
  };
  
  return solve(p);
}