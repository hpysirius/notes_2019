// 核心： ES6继承的结果和寄生组合继承相似，本质上，ES6继承是一种语法糖。但是，寄生组合继承是先创建子类实例this对象，然后再对其增强；而ES6先将父类实例对象的属性和方法，
// 加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

class A {}

class B extends A {
  constructor() {
    super();
  }
}
class A {
}

class B {
}

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

// ES6继承与ES5继承的异同：
// 相同点：本质上ES6继承是ES5继承的语法糖
// 不同点：

// ES6继承中子类的构造函数的原型链指向父类的构造函数，ES5中使用的是构造函数复制，没有原型链指向。
// ES6子类实例的构建，基于父类实例，ES5中不是。