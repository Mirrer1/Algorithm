function solution(record) {
  const userName = {};

  const massage = {
    "Leave": "나갔습니다.",
    "Enter": "들어왔습니다.",
  }

  return record.map(v => v.split(" ")).filter(v => {
      const [state, userId, name] = v;
      if (name) userName[userId] = name;

      return state !== "Change";
    })
    .map(v => `${userName[v[1]]}님이 ${massage[v[0]]}`);
}