const curry = (fn) => {
  const len = fn.length;
  const _c = (...agrs1) => agrs1.length >= len ?
    fn(...agrs1) : (...args2) => _c(...[...agrs1, ...args2]);
  return _c;
}
  ;

// 缩减
const curry = (fn, ...args1) => 
args1.length < fn.length
? (...args2) => curry(fn, ...args1, ...args2) : fn(...args1);


