// const p1 = new Promise(((resolve, reject) => {
//   setTimeout(() => reject(new Error('fail')), 3000);
// }));

// const p2 = new Promise(((resolve, reject) => {
//   setTimeout(() => resolve(p1), 1000);
// }));

// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// ;

// const p1 = new Promise((resolve, reject) => {
//     resolve(2);
//     console.log(hh)
//     // console.log(1);
// })

// Promise.resolve().then(function() {
//     throw new Error('Ouch!');
// });
// process.on('unhandledRejection', function() {
//     console.log('[unhandledRejection]', arguments);
// });

// p1.then(val => {
//     console.log(val);
// }, error => {
//     console.log(err);
// })
const promise = new Promise(((resolve, reject) => {
  resolve('ok');
  throw new Error('wtf');
  // setTimeout(function() { throw new Error('test') }, 0)
}));
promise.then((value) => { console.log(value); })
  .catch((err) => {
    console.log(err);
  });
process.on('unhandledRejection', (err, p) => {
  console.error('catch exception:', err.stack);
});

