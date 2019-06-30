console.log(Promise);
new Promise((resolve, reject) => {
  console.log(1);
  resolve(3);
  // reject(4);
  // Promise.resolve()
  Promise.resolve().then(
    () => {
      Promise.resolve().then(() => {
        console.log('8');
        Promise.resolve().then(() => {
          console.log('9');
        });
        console.log('7');
      });
      console.log('6');
    }
  );
}).then((num) => {
  console.log(num);
}, (num) => {
  console.log(num);
});
console.log(2);
