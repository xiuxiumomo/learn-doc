import Dictionary from "./dictory";
class Grap {
  constructor() {
    //保存所有的点
    this.vertexes = [];
    //保存所有的边
    this.edges = new Dictionary();
  }
  //添加顶点
  addVertexes(v) {
    this.vertexes.push(v);
    //初始化边数组是空
    this.edges.set(v, []);
  }
  //添加边
  addEdges(v1, v2) {
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  }
}

const grap = new Grap();

const vs = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < vs.length; ++i) {
  grap.addVertexes(vs[i]);
}

grap.addEdges("A", "B");
grap.addEdges("A", "C");
grap.addEdges("A", "D");
grap.addEdges("C", "D");
grap.addEdges("C", "G");
grap.addEdges("D", "G");
grap.addEdges("D", "H");
grap.addEdges("B", "E");
grap.addEdges("B", "F");
grap.addEdges("E", "I");
