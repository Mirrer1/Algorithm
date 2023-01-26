function solution(my_string) {
  const vowels = ["a", 'e', 'i', 'o', 'u'];
  const result = my_string.split('').filter(v => !vowels.includes(v));
  
  return result.join('');
}