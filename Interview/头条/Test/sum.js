// add(1,2)(3,4);
const sum = (...args) => args.reduce((total, num) => total + num, 0);

const add = (...args1) => {
    const total = sum(...args1);
    const temp = (...args2) => add(total, ...args2);
    temp.toString = () => total;
    return temp;
}

console.log(add(1,2)(3,4))