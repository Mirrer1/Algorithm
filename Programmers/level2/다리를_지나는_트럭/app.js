// 나의 풀이
function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, _ => 0);
  let curWeight = 0;
  let time = 0;

  while (truck_weights.length) {
    time++;
    curWeight -= bridge.shift();

    if (curWeight + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      const curTruck = truck_weights.shift();      
      bridge.push(curTruck);
      curWeight += curTruck;
    }
  }
  return time + bridge_length;
}

// 다른 사람의 풀이
// 큐 자료구조를 사용하여 풀이
function solution(bridge_length, weight, truck_weights) {  
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;
  
  while (qu.length > 0 || truck_weights.length > 0) {    
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {      
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {      
      if (qu[0]) time = qu[0][1] - 1;
    }    
    time++;
  }
  return time;
}