const entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae',
};
function changeToNormal(obj) {
    let newObj = {};
    let t = newObj;
    const keys = Object.keys(obj);
    for (key of keys) {
        const fArr = key.split('.');
        while (fArr.length) {
            const val = fArr.length === 1 ? entry[key] : {};
            const tmpKey = fArr.shift();
            t[tmpKey] = t[tmpKey] || val;
            t = t[tmpKey];
        }
        t = newObj;
    }
    return newObj;
}
//   const changObjStructureOfNormal = output => {
//     const keys = Object.keys(output);
//     const resObj = {};
//     for (const key of keys) {
//       const everyKey = key.split('.');
//       everyKey.reduce((pre, next, index, array) => {
//         if (index === array.length - 1) {
//           pre[next] = output[key];
//           return;
//         }
//         pre[next] = resObj[next] || {};
//         return pre[next];
//       }, resObj);
//     }
//     return resObj;
//   };
console.log(changeToNormal(entry));
