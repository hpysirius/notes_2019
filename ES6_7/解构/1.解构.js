let arr = [{ a: 1, i: { b: 2, c: 3, d: 4 } }];
const [{ a, [String.fromCharCode(105)]: { b, c, d }}] = arr;
console.log(a, b, c, d);