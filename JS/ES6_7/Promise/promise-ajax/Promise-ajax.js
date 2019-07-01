const getJSON = (url) => {
  const promise = new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = handler;
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
  });
  return promise;
};

getJSON('./a.json').then((json) => {
  console.log(json);
  console.log(`Contents: ${json}`);
}, (error) => {
  console.error('出错了', error);
});
