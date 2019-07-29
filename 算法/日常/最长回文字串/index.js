function manacher(str) {
    var mx = 0, id = 0;
    newStr = str.split('').reduce((prev, item) => prev + item + '#', '#');
    var p = [];
    var newLen = newStr.length;
    for (var i = 0; i < newLen; i++) {
        p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
        while ((newStr[i + p[i]] === newStr[i - p[i]] && i + p[i] < newLen && i - p[i] >= 0)) {
            p[i]++;
        }
        if (i + p[i] > mx) {
            id = i;
            mx = id + p[i];
        }
    }
    const i_res = p.findIndex(it => Math.max(...p) === it);
    const s_res = newStr.slice(i_res - (p[i_res] - 1), i_res + p[i_res])
    return s_res.replace(/\#/g, '');
}

console.log(manacher('abbadd'));

var longestPalindrome = function (s) {
    // babad
    // tag : dp
    if (!s || s.length === 0) return "";
    let res = s[0];

    const dp = [];

    // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = [];
        for (let j = i; j < s.length; j++) {
            if (j - i === 0) dp[i][j] = true;
            // specail case 1
            else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
            // specail case 2
            else if (s[i] === s[j] && dp[i + 1][j - 1]) {
                // state transition
                dp[i][j] = true;
            }

            if (dp[i][j] && j - i + 1 > res.length) {
                // update res
                res = s.slice(i, j + 1);
            }
        }
    }

    return res;
};

// console.log(longestPalindrome('abba'));