/**
 * 手写防抖(debounce)
 * @param fn
 * @param wait
 * @return fun
 * 思考：防抖-> 一定时间内只执行一次
 * 利用clearTimeout清除setTimeout来实现
 * 返回一个函数
 */
// function debounce(fn, wait = 200) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, wait);
//   };
// }
// function fn(...args) {
//   console.log(args);
//   console.log(11);
// }

const debounce = (fn, await = 100) => {
	let timer;
	return (...args) => {
    if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, await)
	}
}

const deFn = debounce(fn);
for (let i = 0; i < 100; i++) {
  setTimeout(() => deFn(i), 10);
}
