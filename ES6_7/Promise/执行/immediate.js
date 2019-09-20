var Mutation = global.MutationObserver || global.WebKitMutationObserver;
var called = 0;
var observer = new Mutation(nextTick);
var element = global.document.createTextNode('');
observer.observe(element, {
    characterData: true  // 设置true，表示观察目标数据的改变
});
// 改变element.data数据变化
scheduleDrain = function () {
    // (called = ++called % 2) 对一个整数called对2取模，得到0或者1
    element.data = (called = ++called % 2);
};
// 当queue = [], draining = undefined
function immediate(task) {
    if (queue.push(task) === 1 && !draining) {
        scheduleDrain(); // 执行scheduleDrain
    }
}
var draining;
var queue = [];

function nextTick() {
    draining = true;
    var i, oldQueue;
    // 这段代码的意思
    // 在nextTick执行过程中，queue队列里面添加进来的任务
    // 全部执行完毕
    var len = queue.length;
    while (len) {
        oldQueue = queue;
        queue = [];
        i = -1;
        while (++i < len) {
            // i 从0开始执行，先进先执行，满足队列的执行机制，执行完成后
            oldQueue[i]();
        }
        // 判断queue是否有新任务加入。改变了len
        // 如果len改变，继续上面的while不退出
        len = queue.length;
    }
    draining = false;
}