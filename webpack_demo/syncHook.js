// SyncHook 钩子的使用
const { SyncHook }  = require('tapable');

let queue = new SyncHook(['name', 'name2']);

// 订阅
queue.tap('1', (name, name1) => {
    console.log(name, name1, '1');
    return '1';
})
queue.tap('2', name => {
    console.log(name, '2');
})
queue.tap('3', name => {
    console.log(name, '3');
})

// 发布
queue.call('hpysirius', 'hpysirius1');


// node syncHook执行该文件
// 执行结果
// 传入的参数需要和new实例的时候保持一致，否则获取不到多传的参数
// hpysirius hpysirius1 1
// hpysirius 2
// hpysirius 3


