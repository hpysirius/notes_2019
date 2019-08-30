const kill1 = () => {
    let ins = [], hash = {}, j = 0;
    while (true) {
        for (let i = 1; i <= 100; i++)
            if (!hash[i]) {
                j++;
                if (j === 7) {
                    ins.push(i);
                    hash[i] = true;
                    j = 0;
                }
            }
        if (ins.length === 100) {//所有人枪毙完
            break;
        }
    }
    return ins;
}


console.log(kill1());