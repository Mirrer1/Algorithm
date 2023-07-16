function solution(rows, columns, queries) {
  const result = [];
  const table = Array.from({length: rows + 1}, () => []);
  let tdx = 1;
  
  for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= columns; j += 1) {
      table[i][j] = tdx++;
    }
  }
  
  queries.forEach(query => {
    const [row, col, drow, dcol] = query;
    let [nr, nc] = [row, dcol];
    const cddt = [table[nr][nc]];

    while (nc > col) {
      cddt.push(table[nr][nc] = table[nr][--nc]);
    } 

    while (nr < drow) {
      cddt.push(table[nr][nc] = table[++nr][nc]);
    } 

    while (nc < dcol) {
      cddt.push(table[nr][nc] = table[nr][++nc]);
    } 

    while (nr > row) {
      cddt.push(table[nr][nc] = table[--nr][nc]);
    } 

    table[nr + 1][nc] = cddt[0];
    result.push(Math.min(...cddt));
  })

  return result;
}