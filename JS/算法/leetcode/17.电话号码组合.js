/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  function cartesianProduct(sets) {
    const head = sets.shift() || [];
    if (sets.length === 0) {
      return head.map(item => item);
    }

    const tailProduct = cartesianProduct(sets);
    return flatMap(
      item => flatMap(
        items => item + items,
        tailProduct
      ),
      head
    );
  }

  function flatMap(fn, array) {
    return [].concat(...array.map(fn));
  }
  const obj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  const arr = digits.toString().split('');
  const len = arr.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(obj[arr[i]]);
  }
  return cartesianProduct(res);
};

const res = letterCombinations('24');
console.log(res);
