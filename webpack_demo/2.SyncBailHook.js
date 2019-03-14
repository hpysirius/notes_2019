// SyncBailHook 钩子的使用
// 只要监听函数中有一个函数的返回值不为 null，则跳过剩下所有的逻辑
const { SyncBailHook }  = require('tapable');

let queue = new SyncBailHook(['name', 'name2']);

// 订阅
queue.tap('1', (name, name1) => {
    console.log(name, name1, '1');
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


// node 2.SyncBailHook.js
// 执行结果
// hpysirius hpysirius1 1
// hpysirius 2

