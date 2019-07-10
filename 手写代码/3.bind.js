/**
 * 思路
 * 1. 绑定this
 * 2. 能接受参数
 * 3. 返回一个绑定函数
 * 4. 绑定函数能返回值
 * 5. 绑定函数能使用new
 * 6. 绑定函数new出来对象能继承原函数的属性
 */

Function.prototype.bind2 = function (context, ...args1) {
  const self = this;
  function fBound(...args2) {
    return self.apply(this instanceof fBound ? this : context, [...args1, ...args2]);
  }
  function fNOP() {}
  // 维护原型关系
  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  fBound.prototype = new fNOP();
  return fBound;
};

const foo = {
  value: 1
}
;
function bar(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.value);
}
bar.prototype.friend = 'kevin';
bar.prototype.getName = function () {
  console.log(this.name);
};
const NewBar = bar.bind(foo, 'hpy');
// NewBar();
const obj = new NewBar(20);
console.log(obj);
console.log(obj.constructor);

// NewBar.prototype.friend = 'aaa'; // 修改绑定函数原型属性不会影响原函数的原型属性
// console.log(bar.prototype.friend);
// bind 当作构造器，bind的this就失效了，所以当构造器使用，没啥意义了。
