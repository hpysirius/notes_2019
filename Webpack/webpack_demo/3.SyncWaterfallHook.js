// SyncWaterfallHook 钩子的使用
// 上一个监听函数的返回值可以传给下一个监听函数
const { SyncWaterfallHook }  = require('tapable');

let queue = new SyncWaterfallHook(['name', 'name2']);

// 订阅
queue.tap('1', (name, name1) => {
    console.log(name, name1, '1');
    return 'hpysirius1';
})
queue.tap('2', name => {
    console.log(name, '2');
    return 'hpy';
})
queue.tap('3', name => {
    console.log(name, '3');
})

// 发布
queue.call('hpysirius', 'hpysirius1');


// node 3.SyncWaterfallHook.js
// 执行结果
// hpysirius hpysirius1 1
// hpysirius1 2
// hpy 3

