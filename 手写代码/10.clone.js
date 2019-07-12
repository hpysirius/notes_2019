// 浅拷贝
function cloneShallow(source) {
    var target = {};
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}

var obj1 = {
    'name': 'zhangsan',
    'age': '18',
    'language': [1, [2, 3], [4, 5]],
};

var obj2 = obj1;
var obj3 = cloneShallow(obj1);
obj2.language[1] = ["二","三"];
obj3.language[2] = ["四","五"];

obj3.age = "20";

console.log(obj1);
console.log(obj2);
console.log(obj3);

// 深拷贝
const isObject = (obj) => typeof obj === 'object' && obj !== null;
function cloneDeep(source){
    if(!isObject(source)) return source;
    var target = Array.isArray(source) ? [] : {};
    for(let key in source){
        if(source.hasOwnProperty(key)){
            if(isObject(source[key])){
                target[key] = cloneDeep(source[key]);
            }else{
                target[key] = source[key];
            }
        }
    }
}