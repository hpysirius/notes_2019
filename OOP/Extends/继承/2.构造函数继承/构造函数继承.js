function SuperType(name) {
    this.name = name;
}
SuperType.prototype.getName = function() {
    return this.name;
}

function SubType(name) {
    SuperType.call(this, name);
}




let sub = new SubType('hpy');
console.log(sub);
console.log(sub.name);
// console.log(sub.getName())



// 核心：将父类构造函数的内容复制给了子类的构造函数。这是所有继承中唯一一个不涉及到prototype的继承。

// 优点：和原型链继承完全反过来。

// 父类的引用属性不会被共享
// 子类构建实例时可以向父类传递参数
// 缺点：父类的方法不能复用，子类实例的方法每次都是单独创建的。