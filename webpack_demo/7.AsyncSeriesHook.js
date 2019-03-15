// usage - tap
// 不关心callback()的参数
const { AsyncSeriesHook } = require('tapable');

let queue1 = new AsyncSeriesHook(['name']);
console.time('cost1');

queue1.tap('1', name => {
    console.log(name, 1);
    return "Wrong";
});

queue1.tap('2', name => {
    console.log(name, 2);
    return 'wrong'
})

queue1.tap('3', name => {
    console.log(name, 3);
})

queue1.callAsync('hpysirius', err => {
    console.log(err);
    console.timeEnd('cost1');
})
// 执行结果
// node 7.AsyncSeriesHook
// hpysirius 1
// hpysirius 2
// hpysirius 3
// undefined
// cost1: 5.572ms



// 2、usage - tapAsync
let queue2 = new AsyncSeriesHook(['name']);
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
        // return 'wrong';// 最后的回调就不会调用了
        cb();
    }, 1000);
});

queue2.tapAsync('3', (name, cb) => {
    setTimeout(() => {
        console.log(name, 3);
        cb();
    }, 1000);
});

queue2.callAsync('hpy', err => {
    console.log(err);
    console.log('over');
    console.timeEnd('cost2');
})

// hpy 1
// hpy 2
// hpy 3
// undefined
// over
// cost2: 3017.068ms

// usage - promise
let queue3 = new AsyncSeriesHook(['name']);
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
// cost3: 6011.114ms