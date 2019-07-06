Promise.resolve()
    .then(
        () => {
            console.log('promise 1')
            // cb1
            Promise.reject().then(
                () => {},
                () => {
                    console.log('promise 2')
                    // cb4
                    Promise.resolve().then(() => {
                        console.log('promise 3')
                    })
                });
            return 1;
        })
    .then(
        // cb2
        () => {
            Promise.resolve().then(() => {
                console.log('promise 4')
            })
            console.log('promise 5');
        }
    )
    .then(
        // cb3
        () => {
            console.log('promise 8')
        }
    )
/**
 * 1. promise 1,
 * 2. 状态改变，cb1进入queue
 * 3. cb2进入自己的queue
 * 4. cb3进入自己的promise的queue
 * 5. 执行cb1，把
 *
 * end： [cb1, cb2, ]
 */

promise 1
VM40:9 promise 2
VM40:23 promise 5
VM40:12 promise 3
VM40:21 promise 4
VM40:29 promise 8