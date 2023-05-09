function solution(players, callings) {
  let playersMap = new Map();
  let playerArr = [...players];
  let answer = [];

  playerArr.forEach((player, index) => playersMap.set(player, index));

  [...callings].forEach((player, index) => {
    let frontplayerIndex = playersMap.get(player) - 1; // 2
    let frontplayer = players[frontplayerIndex]; // poe

    players[frontplayerIndex] = player;
    players[frontplayerIndex + 1] = frontplayer;

    playersMap.set(player, playersMap.get(player) - 1);
    playersMap.set(frontplayer, playersMap.get(frontplayer) + 1);
  });

  [...playersMap].sort((a, b) => a[1] - b[1]).map((arr) => answer.push(arr[0]));

  return answer;
}