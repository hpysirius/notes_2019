function SuperType() {
    this.name = 'hpysirius';
    this.arr = [1,2];
}
SuperType.prototype.getName = function() {
    return this.name;
}

function SubType() {}

// 核心：将父类的实例作为子类的原型
SubType.prototype = new SuperType() 
// 所有涉及到原型链继承的继承方式都要修改子类构造函数的指向，否则子类实例的构造函数会指向SuperType。
SubType.prototype.constructor = SubType;



let sub = new SubType();
let sub1 = new SubType();
console.log(sub.getName());
console.log(sub.name);
console.log(sub.arr.push(1));
console.log(sub.arr);
console.log(sub1.arr);

let sup = new SuperType();
console.log(sup.arr);


// 优点：父类方法可以复用

// 缺点：
// 父类的引用属性会被所有子类实例共享
// 子类构建实例时不能向父类传递参数