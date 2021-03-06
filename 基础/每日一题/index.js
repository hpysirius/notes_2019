// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}

const findLongest = (str) => {
    let output = {};
    if (!str.length) return output;
    let count = 0;
    let maxCount = 0;
    let cur = str[0];
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        if (s === cur) {
            count++;
            if (count > maxCount) {
                output = { [s]: count };
                maxCount = count;
            }
            if(count === maxCount){
                output[s] = count;
            }
        }else{
            cur = s;
            count = 1;
        }
    }
    return output;
}
console.log(findLongest('a'));