const flatten = (arr, ans = []) => {
    for (let v of arr) {
        if (Array.isArray(v)) {
            flatten(v, ans);
        } else {
            ans.push(v);
        }
    }
    return ans;
}

console.log(flatten([1, 2, 3, [4, 5, 6, [6, 7, 8]]]));