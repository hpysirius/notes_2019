// Promise.resolve()
//     .then(
//         // cb1
//         () => {
//             console.log('promise 1')
//             Promise.resolve().then(
//                 // cb2
//                 () => {
//                     console.log('promise 2')
//                     Promise.resolve().then(
//                         // cb3
//                         () => { console.log('promise 3') })
//                 })
//                 .then(
//                     // cb4
//                     () => {
//                         console.log('promise 4')
//                         Promise.resolve().then(
//                             // cb5
//                             () => { console.log('promise 5') })
//                     })
//         })
//     .then(
//         // cb6
//         () => {
//             console.log('promise 7');
//             Promise.resolve().then(
//                 // cb7
//                 () => { console.log('promise 6') })
//         }
//     )
//     .then(
//         // cb8
//         () => {
//             console.log('promise 8')
//         }
//     )


Promise.resolve()
    .then(() => {
        console.log('promise 1');
        return Promise.resolve().then(
            () => {
                console.log('promise 2');
                return Promise.resolve().then(
                    () => {
                        console.log('promise 3');
                    }
                )
            }
        )

    })
    .then(
        () => { console.log('promise 4') }
    )

