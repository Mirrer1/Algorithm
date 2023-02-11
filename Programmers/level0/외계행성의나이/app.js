function solution(age) {    
  return (age + '').split('').map(v => String.fromCharCode(v.charCodeAt() + 49)).join('');
}