// 节点
function Node(value) {
  this.value = value; // 当前节点的元素
  this.next = null; // 下一个节点的链接
}

// 查找给定节点位置
function find(item) {
  let curNode = this.head;
  while (curNode.value !== item) {
    curNode = curNode.next;
  }
  return curNode;
}
// 插入节点
function insert(value, preValue) {
  const newValue = new Node(value);
  const curNode = this.find(preValue);
  newValue.next = curNode.next;
  curNode.next = newValue;
}


function SList() {
  this.head = new Node('head'); // 头节点
  this.find = find;
  this.insert = insert;
}


const fruits = new SList();

fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');
console.log(fruits);