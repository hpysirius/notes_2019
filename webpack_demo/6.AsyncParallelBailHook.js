// usage - tap
// 要监听函数的返回值不为 null，就会忽略后面的监听函数执行，
// 直接跳跃到callAsync等触发函数绑定的回调函数，然后执行这个被绑定的回调函数。
const { AsyncParallelBailHook } = require('tapable');

let queue1 = new AsyncParallelBailHook(['name']);
console.time('cost1');

queue1.tap('1', name => {
    console.log(name, 1);
});

queue1.tap('2', name => {
    console.log(name, 2);
    return 'wrong'
})

queue1.tap('3', name => {
    console.log(name, 3);
})

queue1.callAsync('hpysirius', err => {
    console.timeEnd('cost1');
})
// 运行
// node 6.AsyncParallelBailHook.js
// hpysirius 1
// hpysirius 2
// cost1: 4.340ms



// 2、usage - tapAsync
let queue2 = new AsyncParallelBailHook(['name']);
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
        return 'wrong';// 最后的回调就不会调用了
        cb();
    }, 1000);
});

queue2.tapAsync('3', (name, cb) => {
    setTimeout(() => {
        console.log(name, 3);
        cb();
    }, 1000);
});

queue2.callAsync('hpysirius2', () => {
    console.log('over');
    console.timeEnd('cost2');
})

// hpysirius2 1
// hpysirius2 2
// hpysirius2 3

// usage - promise
let queue3 = new AsyncParallelBailHook(['name']);
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
            reject('wrong');// reject()的参数是一个不为null的参数时，最后的回调就不会再调用了
            // resolve();
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
// error
// cost3: 2005.314ms
// hpysirius 3