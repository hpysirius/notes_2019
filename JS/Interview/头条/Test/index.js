// console.log(1);

// const curry = (...args1) => {
//     // const
//     const len = args1.length;
//     const _c = (...args2) => {
//         args2.length >= len ? fn.apply(this, args2) : _c(...[...args1, ...arg2]);
//     }
//     return _c;
// }

// sum = function(...args){
//     return args.reduce((a, b) => {
//         a =
//     })
// }


const sum = (...args) => args.reduce((total, num) => total + num);


function add(...args1) {
  const total = sum(...args1);
  function temp(...args2) {
    return add(total, ...args2);
  }
  temp.toString = () => total;
  return temp;
}


const t = add(1, 2)(3, 4);


function throttle(fn, wait = 100) {
  let pre = new Date();
  return function (...args) {
    const cur = new Date();
    if (cur - pre >= wait) {
      fn.apply(this, args);
      pre = new Date();
    }
  };
}

function _new(A, ...args) {
  const obj = {};
  obj.__proto__ = A.prototype;
  A.apply(this, args);
  return obj;
}
