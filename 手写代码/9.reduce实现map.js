Array.prototype.map1 = function (cb) {
  const arr = this;
  return arr.reduce((res, cur, i) => res.concat(cb(cur, i, arr)), []);
};
const m = [1, 2, 3, 4, 54].map1((v, i, arr) => v + v);
console.log(m);

