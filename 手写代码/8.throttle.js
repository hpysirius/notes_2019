/**
 * 函数节流
 * throttle
 * @param fn
 * @param wait
 */
function throttle(fn, wait = 100) {
  let prev = new Date();
  return function (...args) {
    const now = new Date();
    if (now - prev >= wait) {
      fn.apply(this, args);
      prev = new Date();
    }
  };
}

function throttle(fn, wait = 100){
  let timer = null;
  return function(...args) {
    if(!timer){
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  }
}


const fn = () => { console.log('111'); };
const newFn = throttle(fn, 1000);
newFn();
