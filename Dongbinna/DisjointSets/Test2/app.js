class DisjointSet {    
  constructor(n) {
      this.parent = new Array(n).fill(0).map((_, i) => i);      
      this.rank = new Array(n).fill(1); 
  }
  
  find(u) {
      if (u === this.parent[u]) return u;      
      return this.parent[u] = this.find(this.parent[u]);
  }
  
  merge(u, v) {
      let u_root = this.find(u);
      let v_root = this.find(v);
      
      if (u_root === v_root) return;
      
      if (this.rank[u_root] > this.rank[v_root]) [this.rank[u_root], this.rank[v_root]] = [this.rank[v_root], this.rank[u_root]];      
      this.parent[u_root] = v_root;

      if (this.rank[u_root] === this.rank[v_root]) this.rank[v_root]++;
  }
}