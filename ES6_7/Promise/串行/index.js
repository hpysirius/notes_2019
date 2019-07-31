function p1() {
    setTimeout(() => {
        console.log('p1');
    })
}

function p2() {
    setTimeout(() => {
        console.log('p2');
    })
    
}

function p3() {
    setTimeout(() => {
        console.log('p3');
    })
}

function p4() {
    setTimeout(() => {
        console.log('p4');
    })
}

function c(fn) {
    return new Promise((resolve, reject) => {
        fn();
        resolve();
    })
}

c(p1)
    .then(c(p2))
    .then(c(p3))
    .then(c(p4))