/**
 * 思路
 * 1. 绑定this
 * 2. 能接受参数
 * 3. 返回一个绑定函数
 * 4. 绑定函数能返回值
 * 5. 绑定函数能使用new
 * 6. 绑定函数new出来对象能继承原函数的属性
 */

Function.prototype.bind2 = function (...args) {
  const self = this;
  const context = args[0];
  const args1 = args.slice(1);
  function bindFunc(...args2) {
    return self.apply(this instanceof bindFunc ? this : context, [...args1, ...args2]);
  }
  function F() {}
  F.prototype = this.prototype;
  bindFunc.prototype = new F();
  return bindFunc;
};
