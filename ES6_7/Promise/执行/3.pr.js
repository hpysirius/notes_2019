const first = () =>
    new Promise((resolve, reject) => {
        resolve(2);
        console.log(3);
        let p = new Promise((resolve, reject) => {
            console.log(7);
            // setTimeout(() => {
            //     console.log(5);
            //     resolve(6);
            // }, 0);
            resolve(1);
        })
        p.then(arg => {
            console.log(arg);
        })
    })

first().then(arg => {
    console.log(arg);
})
console.log(4);