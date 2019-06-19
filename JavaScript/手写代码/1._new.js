/**
 * 思路：
 * 创建一个对象
 * 对象.__proto__ = 构造函数.prototype
 * 执行构造函数
 */
function _new(A, ...args) {
  const o = {};
  o.__proto__ = A.prototype;
  A.apply(this, args);
  return o;
}
