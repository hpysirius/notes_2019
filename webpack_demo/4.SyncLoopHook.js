// SyncLoopHook 钩子的使用
// 当监听函数被触发的时候，如果该监听函数返回true时则这个监听函数会反复执行，如果返回 undefined 则表示退出循环
const { SyncLoopHook }  = require('tapable');

let queue = new SyncLoopHook(['name', 'name2']);

let count = 4;
// 订阅
queue.tap('1', name => {
    console.log('count: ', count--);
    if(count > 0){
        return true;
    }
    return;
})
// 发布
queue.call('hpysirius');


// node 4.SyncLoopHook.js
// 执行结果
// count:  4
// count:  3
// count:  2
// count:  1

