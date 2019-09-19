// 核心：使用原型式继承获得一个目标对象的浅复制，然后增强这个浅复制的能力。
// 优缺点：仅提供一种思路，没什么优点

function createAnother(original) {
    var clone = object(original);    //通过调用函数创建一个新对象
    clone.sayHi = function () {      //以某种方式来增强这个对象
        alert("hi");
    };
    return clone;                  //返回这个对象
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"