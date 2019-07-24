const a = [1, 3, 5, 6, 8, 9];
const b = [2, 4, 7];
// 合并
// mergeC = [1,2,3,4,5,6,7,8,9] 
// 复杂度不超过O(n)

const merge = (a, b) => {
    let output = [];
    const _c = (a, b) => {
        if (a.length && b.length) {
            let temp;
            if (a[0] > b[0]) {
                temp = b.shift();
            } else {
                temp = a.shift();
            }
            output.push(temp);
            _c(a, b);
        }
    }
    _c(a, b);
    a.length && (output = [...output, ...a]);
    b.length && (output = [...output, ...b]);
    return output;
}
console.log(merge(a, b));

