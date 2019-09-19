function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends);   //"Shelby,Court,Van,Rob,Barbie"


// 核心：原型式继承的object方法本质上是对参数对象的一个浅复制。
// 优点：父类方法可以复用
// 缺点：

// 父类的引用属性会被所有子类实例共享
// 子类构建实例时不能向父类传递参数
