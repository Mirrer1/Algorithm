function solution(new_id) {
  new_id = new_id.toLowerCase();  
  new_id = new_id.replace(/[^\w\-\.]/g, "");  
  new_id = new_id.replace(/\.{2,}/g, ".");  
  new_id = new_id.replace(/^\.|\.$/, "");
  
  if (new_id.length === 0) new_id = "a";  
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, "");
    
  let len = new_id.length;
  if (len <= 2) new_id = new_id + new_id[len - 1].repeat(3 - len);

  return new_id;
}