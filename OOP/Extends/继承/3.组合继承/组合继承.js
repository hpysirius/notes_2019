function SuperType() {
    this.name = 'parent';
    this.arr = [1, 2, 3];
}
SuperType.prototype.getName = function () {
    return this.name;
}

function SubType() { 
    SuperType.call(this); // 第二次调用SuperType
}

SubType.prototype = new SuperType(); // 第一次调用SuperType


console.log(SubType);
let a = new SubType();

console.log(a);
console.log(a.name);
console.log(a.arr);
a.arr.push(1);
console.log(a.arr);

let a1 = new SubType();
console.log(a1.arr);

// 核心：原型链继承和构造函数继承的组合，兼具了二者的优点。
// 优点：

// 父类的方法可以被复用
// 父类的引用属性不会被共享
// 子类构建实例时可以向父类传递参数

// 缺点：
// 调用了两次父类的构造函数，第一次给子类的原型添加了父类的name, 
// arr属性，第二次又给子类的构造函数添加了父类的name, arr属性，
// 从而覆盖了子类原型中的同名参数。这种被覆盖的情况造成了性能上的浪费。