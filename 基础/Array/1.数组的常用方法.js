// function forEach(array, callback) {
//     const { length } = array;
//     for (let i = 0; i < length; i++) {
//         const value = array[i];
//         callback(value, i, array);
//     }
// }
// // 咱们遍历数组并为每个元素执行回调。这里需要注意的一点是，该方法没有返回什么，所以默认返回undefined。
// const arr = forEach([1,2,3], val => val + 1);
// console.log(arr);

// function map(array, callback) {
//     const { length } = array;
//     let ans = new Array(length);
//     for(let i = 0; i < length; i++) {
//         const value = array[i];
//         ans[i] = callback(value, i, array);
//     }
//     return ans;
// }

// const arr = map([1,2,3], val => val + 1);
// console.log(arr);




// function filter(array, callback) {
//     let { length } = array;
//     let ans = [];
//     for(let i = 0; i < length; i++)
//         if (callback(array[i], i, array))
//             ans.push(array[i]);
//     return ans;
// }

// const ans = filter([1, 2, 3, 4, 5], number => number >= 3);
// console.log(ans);


// function push(array, ...values) {
//     let { length } = array;
//     for (let i = 0; i < values.length; i++)
//         array[length + i] = values[i];
//     return array.length;
// }


let arr = [1, 2];
// // push(a, 1, 2);
// // console.log(a);

// function reduce(array, callback, initValue) {
//     let ans = initValue;
//     let s = 0;
//     if(initValue === undefined) {
//         ans = array[0];
//         s = 1;
//     }
//     for(let i = s; i < array.length; i++)
//         ans = callback(ans, array[i], i, array);
//     return ans;
// }

// let sum = reduce(arr, (a, b) => a + b);
// console.log(arr);

// function findIndex(array, callback) {
//     let { length } = array;
//     for (let i = 0; i < length; i++)
//         if (callback(array[i], i, array))
//             return i;
//     return -1;
// }

// const callb = val => val === 1;
// let i = findIndex(arr, callb);
// console.log(i);

// function find(array, callback) {
//     let index = array.findIndex(callback);
//     if (index === -1)
//         return undefined;
//     return array[index];
// }
// let a = [1,2,3]
// let ans = find(a, b => b === 2);
// console.log(ans);

// function indexOf(array, value) {
//     return array.findIndex(val => val === value)
// }

// var a = [1, 2, 3];
// console.log(indexOf(a, 1));

// function lastIndexOf(array, callback) {
// let { length } = array;
// for (let i = length; i > 0; i--)
//     if (callback(array[i], i, array))
//         return i;
// return -1;
// }

// let a = [2, 2, 4, 5, 4, 4];
// console.log(lastIndexOf(a, v => v === 4));

// function every(array, callback) {
//     let { length } = array;
//     for (let i = 0; i < length; i++)
//         if (!callback(array[i], i, array))
//             return false;
//     return true;
// }

// function some(array, callback) {
//     let { length } = array;
//     for (let i = 0; i < length; i++)
//         if (callback(array[i], i, array))
//             return true;
//     return false;
// }
// console.log(some([1,2,3, '1'], v => Number.isInteger(v)));

// function includes(array, val) {
//     let { length } = array;
//     for (let i = 0; i < length; i++)
//         if (array[i] === val)
//             return true;
//     return false;
// }

// console.log(includes([1, 2, 3], 3));

// function concat(array, ...values) {
//     let ans = [...array];
//     let { length } = values;
//     for (let i = 0; i < length; i++) {
//         let val = values[i];
//         if (Array.isArray(val))
//             ans.push(...val);
//         else
//             ans.push(val);
//     }
//     return ans;
// }

// let a = [1, 2, 3];

// console.log(concat(a, [4, 4]))

// function join(array, joinWith) {
//     return array.reduce((ans, cur, i) => {
//         if(i === 0) return cur;
//         return `${ans}${joinWith}${cur}`
//     }, '');
// }

// console.log(join([1,2,3], '-'));

function reverse(array) {
    let ans = [...array];
    let { length } = ans;
    let i = 0;
    while(length--)
        array[length] = ans[i++];
    return array;
}
let a = [1,2,3]
console.log(reverse(a));
console.log(a);