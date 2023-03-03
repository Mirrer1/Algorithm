function solution(id_pw, db) {
  let result = '';  
  
  db.map((item, i) => {if(id_pw[0] === item[0] && id_pw[1] === item[1]) result = "login"
	else if(id_pw[0] === item[0] && id_pw[1] !== item[1]) result =  "wrong pw"
	else if(id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = "fail"})
	
  return result
}

function solution(id_pw, db) {
  const [input_id, input_pw] = id_pw;
  const db_info = new Map(db);

  return db_info.has(input_id) ? (db_info.get(input_id) === input_pw ? 'login' : 'wrong pw') : 'fail'
  
}