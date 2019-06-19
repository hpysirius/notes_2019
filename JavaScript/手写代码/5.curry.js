const curry = (fn) => {
  const len = fn.length;
  const _c = (...agrs1) => agrs1.length >= len ?
    fn(...agrs1) : (...args2) => _c(...[...agrs1, ...args2]);
  return _c;
}
  ;

