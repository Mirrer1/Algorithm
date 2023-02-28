function solution(spell, dic) {    
  return dic.some(v => spell.sort().toString() == [...v].sort().toString()) ? 1 : 2;
}