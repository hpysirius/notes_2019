// 如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]

// 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]

// 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]


const arr = [123, { a: 1, b: 2 }, { b: 2, a: 1 }, "meili"]
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

// 深度比较
function looseEqual(a, b) {
    if (a === b) return true;
    const isObjectA = isObject(a);
    const isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            const isArrayA = Array.isArray(a);
            const isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every((e, i) => looseEqual(e, b[i]));
            } else if (!isArrayA && !isArrayB) {
                const keysA = Object.keys(a);
                const keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(key => looseEqual(a[key], b[key]));
            }
            return false;
        } catch (e) {
            return false;
        }
    } else {
        return false;
    }
}

const unique = (arr) => {
    const output = [];
    arr.forEach(el => {
        if (!output.some(e => looseEqual(e, el))) {
            output.push(el);
        }
    });
    return output;
}
console.log(unique(arr));