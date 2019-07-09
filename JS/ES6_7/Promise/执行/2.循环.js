// setTimeout(() => {
//     console.log('定时器开始啦');
// })

// new Promise((resolve) => {
//     console.log('马上开始执行for循环啦');
//     for(var i = 0; i < 10000; i++){
//         console.log(i);
//         i === 9999 && resolve();
//     }
// }).then(() => {
//     console.log('执行then函数啦');
// })

// console.log('代码执行结束');


setTimeout(() => {
    console.log('timer3')
}, 300);


setTimeout(() => {
    console.log('time2')
}, 200);

for(var i = 0; i < 10000; i++){
    console.log(i);
}


setTimeout(() => {
    console.log('timer1')
}, 100);