function isPlainrome(s) {
    let l = 0; r = s.length - 1;
    let mid = r >> 1;
    while(l <= mid){
        if(s[l++] !== s[r--]) return false;
    }
    return true;
}

console.log(isPlainrome('a1b1a'));