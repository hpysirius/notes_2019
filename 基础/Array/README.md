### js数组的方法

### 集合类
1. .forEach
Array.prototype.forEach 方法对数组的每个元素执行一次提供的函数，而且不会改变原数组。
```js
function forEach(array, callback) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        const value = array[i];
        callback(value, i, array);
    }
}

```
* 注意
    - 该方法没有返回什么，所以默认返回undefined。
    - 没返回数组，不能使用方法链。
2. map
```js
function map(array, callback) {
    const { length } = array;
    let ans = new Array(length);
    for(let i = 0; i < length; i++) {
        const value = array[i];
        ans[i] = callback(value, i, array);
    }
    return ans;
}
```
* 注意
    - 返回了一个新的数组，不修改旧的

3. filter
```js
function filter(array, callback) {
    let { length } = array;
    let ans = [];
    for(let i = 0; i < length; i++)
        if (callback(array[i], i, array))
            ans.push(array[i]);
    return ans;
}
```
* 注意
    - 返回了一个新的数组，不修改旧的
4. push
```js
function push(array, ...values) {
    let { length } = array;
    for (let i = 0; i < values.length; i++)
        array[length + i] = values[i];
    return array.length;
}
```
5. reduce
```js
function reduce(array, callback, initValue) {
    let ans = initValue;
    let s = 0;
    if(initValue === undefined) {
        ans = array[0];
        s = 1;
    }
    for(let i = s; i < array.length; i++)
        ans = callback(ans, array[i], i, array);
    return ans;
}
```
* 注意
    - 返回了一个新的值，不修改旧的

### 检索类
6. findIndex
```js
function findIndex(array, callback) {
    let { length } = array;
    for (let i = 0; i < length; i++)
        if (callback(array[i], i, array))
            return i;
    return -1;
}
```
* 注意：
    - 找到索引，返回索引
    - 找不到索引，返回-1
7. find
```js
function find(array, callback) {
    let index = array.findIndex(callback);
    if (index === -1)
        return undefined;
    return array[index];
}
```
8. indexOf
实际值作为参数而不是函数传递
```js
function indexOf(array, value) {
    return array.findIndex(val => val === value)
}
```
9. lastIndexOf
返回指定元素最后一个的索引
```js
function lastIndexOf(array, callback) {
    let { length } = array;
    for (let i = length; i > 0; i--)
        if (callback(array[i], i, array))
            return i;
    return -1;
}
```
10. every
every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试，它返回一个布尔值。
```js
function every(array, callback) {
    let { length } = array;
    for (let i = 0; i < length; i++)
        if (!callback(array[i], i, array))
            return false;
    return true;
}
```
11. some
some 方法与 every 刚好相反，即只要其中一个为true 就会返回true。与every 方法类似，咱们可以将some 方法看作一个等价于逻辑或数组。
```js
function some(array, callback) {
    let { length } = array;
    for (let i = 0; i < length; i++)
        if (callback(array[i], i, array))
            return true;
    return false;
}
```
12. includes
includes方法的工作方式类似于 some 方法，但是includes不用回调，而是提供一个参数值来比较元素。
```js
function includes(array, val) {
    let { length } = array;
    for (let i = 0; i < length; i++)
        if (array[i] === val)
            return true;
    return false;
}
```
### 拼接、附加和反转数组
13. concat
concat() 方法用于合并两个或多个数组，此方法不会更改现有数组，而是返回一个新数组。
```js
function concat(array, ...values) {
    let ans = [...array];
    let { length } = values;
    for (let i = 0; i < length; i++) {
        let val = values[i];
        if (Array.isArray(val))
            ans.push(...val);
        else
            ans.push(val);
    }
    return ans;
}
```
14. join
```
function join(array, joinWith) {
    return array.reduce((ans, cur, i) => {
        if(i === 0) return cur;
        return `${ans}${joinWith}${cur}`
    }, '');
}
```
* 注意：
    - 返回join后的值，不影响原数组

15. reverse
方法将数组中元素的位置颠倒，并返回该数组，该方法会改变原数组。
```js
function reverse(array) {
    let ans = [...array];
    let { length } = ans;
    let i = 0;
    while(length--)
        array[length] = ans[i++];
    return array;
}
```

### 添加、删除和追加值
16. shift
