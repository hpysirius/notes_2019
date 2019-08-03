const bucketSort = arr => {
    const bucket = [];
    arr.forEach(it => typeof bucket[it] === 'undefined' ?  bucket[it] = 1 : bucket[it]++);
    const res = [];
    bucket.forEach((it, index) => {
        if(typeof it !== 'undefined'){
            for(let i = 0; i < it; i++){
                res.push(index);
            }
        }
    });
    return res;
}

console.log(bucketSort([4,5,5,5,2,7,1]));