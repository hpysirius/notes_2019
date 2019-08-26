Array.prototype.map1 = function (cb) {
  return this.reduce((res, cur, i) => res.concat(cb(cur, i, this)), []);
};
const m = [1, 2, 3, 4, 54].map1((v, i, arr) => v + v);
console.log(m);

