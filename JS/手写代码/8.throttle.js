/**
 * 函数节流
 * throttle
 * @param fn
 * @param wait
 */
function throttle(fn, wait = 200) {
  let prev = new Date();
  return function (...args) {
    const now = new Date();
    if (now - prev > wait) {
      fn.apply(this, args);
      prev = new Date();
    }
  };
}
const fn = () => { console.log('111'); };
const newFn = throttle(fn, 1000);
newFn();
