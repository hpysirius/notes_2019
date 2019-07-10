setTimeout(() => {
    console.log('timer1');
    Promise.resolve()
        .then(() => {
            console.log('promise 1')
        })
}, 0);

setTimeout(() => {
    console.log('timer2');
    Promise.resolve()
        .then(() => {
            console.log('promise 2')
        })
}, 0);

setImmediate(() => {
    console.log('setImmediate1')
})


// 将两个timer依次放入timer队列，main()执行完毕，调用栈空闲，任务队列开始执行；
