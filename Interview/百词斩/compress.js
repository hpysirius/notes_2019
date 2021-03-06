// const compress = s => {
//     let m = s.length, ans = '';
//     for (let i = 0; i < m; i++) {
//         let k = i;
//         while (s[k] === s[k + 1]) k++;
//         let sum = k - i + 1;
//         ans += s[i] + (sum > 1 ? sum : '');
//         i = k;
//     }
//     return ans.split('');
// }


const compress = s => {
    let m = s.length, ans = '';
    for (let i = 0; i < m; i++) {
        let k = i;
        while (k < m && s[k] === s[k + 1]) k++;
        let sum = k - i + 1;
        ans += s[i] + (sum > 1 ? sum : '');
        i = k;
    }
    return ans.split('');
}

console.log(compress(["a","a","b","b","c","c","c"]));