/**
 * A 为实例
 * B 为构造器
 */

function instanceof1(A, B) {
  const O = B.prototype;
  A = A.__proto__;
  while (true) {
    if (A === null) return false;
    if (A === O) return true;
    A = A.__proto__;
  }
}

function F() {
}
const newF = new F();
console.log(instanceof1(newF, F));
