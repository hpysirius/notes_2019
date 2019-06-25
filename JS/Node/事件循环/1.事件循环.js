console.log('main');
const fs = require('fs');


fs.readFile('./test.js', () => {
  setImmediate(() => {
    console.log('setImmediate');
  });

  setTimeout(() => {
    console.log('settimeout1');
  }, 0);
});

