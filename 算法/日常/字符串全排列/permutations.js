const permutations = string => {
    const result = [];
    if (string.length === 1) {
        return [string];
    } else {
        var pre = permutations(string.slice(1));
        for (var j = 0; j < pre.length; j++) {
            for (var k = 0; k < pre[j].length + 1; k++) {
                var temp = pre[j].slice(0, k) + string[0] + pre[j].slice(k);
                result.push(temp);
            }
        }
        return [...new Set(result)];
    }
}

const res = permutations('abc');
console.log(res);
