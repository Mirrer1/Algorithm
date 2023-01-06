class NaiveDisjointSet {    
  constructor(n) {
      this.parent = new Array(n).fill(0).map((_, i) => i);
  }
  
  find(u) {
      if (u === this.parent[u]) return u;
      return this.find(this.parent[u]);
  }
  
  merge(u, v) {
      let u_root = this.find(u);
      let v_root = this.find(v);
      
      if (u_root === v_root) return;
      
      this.parent[u] = v;
  }
}