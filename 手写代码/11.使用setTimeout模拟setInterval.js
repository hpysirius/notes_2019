
let tId = 0;
const timeMap = {};
const myInt = (cb, time, ...args) => {
    let timerId = tId;
    tId++;
    const fn = () => {
        cb.apply(this, args);
        timeMap[timerId] = setTimeout(() => {
            fn();
        }, time);
    }
    timeMap[timerId] = setTimeout(fn, time);
    return timerId;
}
// 清除fun
myClear = (time) => {
    clearTimeout(timeMap[time]);
    delete timeMap[time]
};
// 测试
const timer1 = myInt((...args) => {
    console.log(args)
}, 100, 2, 3)

const timer2 = myInt((...args) => {
    console.log(args)
}, 100, 4, 5)
  

// 清除
setTimeout(() => {
    myClear(timer1);
    myClear(timer2);
}, 1000);