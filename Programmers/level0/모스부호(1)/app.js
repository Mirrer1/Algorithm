function solution(letter) {
  const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  }  
  const str = letter.split(' ');
  let result = '';
    
  for (let i = 0; i < str.length; i++) {
      result += morse[str[i]];
  };
    
  return result;
}