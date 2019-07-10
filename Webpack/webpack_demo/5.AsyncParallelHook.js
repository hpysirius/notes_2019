// usage - tap

const { AsyncParallelHook } = require('tapable');

let queue1 = new AsyncParallelHook(['name']);
console.time('cost1');

queue1.tap('1', name => {
    console.log(name, 1);
});

queue1.tap('2', name => {
    console.log(name, 2);
})

queue1.tap('3', name => {
    console.log(name, 3);
})

queue1.callAsync('hpysirius', err => {
    console.timeEnd('cost1');
})
// 运行
// node 5.AsyncParallelHook.js
// hpysirius 1
// hpysirius 2
// hpysirius 3
// cost: 4.116ms



// 2、usage - tapAsync
let queue2 = new AsyncParallelHook(['name']);
console.time('cost2');

queue2.tapAsync('1', (name, cb) => {
    setTimeout(() => {
        console.log(name, 1);
        cb();
    }, 1000);
});

queue2.tapAsync('2', (name, cb) => {
    setTimeout(() => {
        console.log(name, 2);
        cb();
    }, 1000);
});

queue2.tapAsync('3', (name, cb) => {
    setTimeout(() => {
        console.log(name, 3);
        cb();
    }, 1000);
});

queue2.callAsync('hpysirius', err => {
    console.timeEnd('cost2');
})

// hpysirius 1
// hpysirius 2
// hpysirius 3
// cost: 1010.240ms

// usage - promise
let queue3 = new AsyncParallelHook(['name']);
console.time('cost3');

queue3.tapPromise('1', (name, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, 1);
            resolve();
        }, 1000);
    })
})

queue3.tapPromise('2', (name, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, 2);
            resolve();
        }, 2000);
    })
})

queue3.tapPromise('3', (name, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, 3);
            resolve();
        }, 3000);
    })
})

queue3.promise('hpysirius').then(() => {
    console.log('over');
    console.timeEnd('cost3');
}, () => {
    console.log('error');
    console.timeEnd('cost3');
})

// hpysirius 1
// hpysirius 2
// hpysirius 3
// over
// cost3: 3008.627ms