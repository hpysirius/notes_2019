Promise.resolve().then(() => {
    return 1;
}, () => {
    return 2;
}).then((val) => {
    console.log('ss', val);
}, val => {
    console.log('bb', val);
})