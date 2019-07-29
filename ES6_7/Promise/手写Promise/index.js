
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function myPromise(executor) {
    // 初始化state为等待态
    this.state = PENDING;
    // 成功的值
    this.value = void 0;
    // 失败的原因
    this.reason = void 0;
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放的数组
    this.onRejectedCallbacks = [];

    // 成功
    let resolve = value => {
        if (this.state === PENDING) {
            this.state = FULFILLED;
            this.value = value;
            // 执行
            this.onResolvedCallbacks.forEach(fn => fn());
        }
    };
    // 失败
    let reject = reason => {
        if (this.state === PENDING) {
            this.state = REJECTED;
            this.reason = reason;
            // 执行
            this.onRejectedCallbacks.forEach(fn => fn());
        }
    };
    try {
        // 立即执行
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

function resolvePromise(promiseAgain, x, resolve, reject){
    if(promiseAgain === x){
        return reject(new TypeError('循环引用'));
    }
    if(x !== null && (typeof x === 'object' || typeof x === 'function')){
        try {
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x, (y) => {
                    resolvePromise(promiseAgain, y, resolve, reject);
                }, e => reject(e));
            }else{
                resolve(x);
            }
        }catch(error){
            reject(error);
        }
    }else{
        resolve(x);
    }
}


myPromise.prototype.then = function (onFulFilled, onRejected) {
    // 声明返回的promiseAgain
    let promiseAgain = new myPromise((resolve, reject) => {
        if (this.state === FULFILLED) {
            let x = onFulFilled(this.value);
            // resolvePromise函数，处理自己return的promise和默认的promiseAgain的关系
            resolvePromise(promiseAgain, x, resolve, reject);
        }
        if (this.state === REJECTED) {
            let x = onRejected(this.reason);
            resolvePromise(promiseAgain, x, resolve, reject);
        }
        if (this.state === PENDING) {
            this.onResolvedCallbacks.push(() => {
                let x = onFulFilled(this.value)
                resolvePromise(promiseAgain, x, resolve, reject);
            });
            this.onRejectedCallbacks.push(() => {
                let x = onRejected(this.reason);
                resolvePromise(promiseAgain, x, resolve, reject);
            });
        }
    });
    return promiseAgain;
}



new myPromise((resolve, reject) => {
    setTimeout(() => resolve(3), 0)
}).then((value) => {
    return new myPromise((resolve, reject) => {
        resolve(value);
    });
    // return value;
}).then((value) => {
    console.log(2);
})