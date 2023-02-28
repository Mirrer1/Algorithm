function solution(spell, dic) {    
  return dic.some(v => spell.sort().join('') === [...v].sort().join('')) ? 1 : 2;
}