// 快排 -> 分治
// 1. 确定分界点
// 2. 调整区间： 小于等于，放左边，大于x，放右边
// 3. 递归左右排序
// var quickSort = function (arr) {
//   if (arr.length <= 1) { return arr; }
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [], right = [];
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// };

const swap = (q, i, j) => {
  let temp = q[i];
  q[i] = q[j];
  q[j] = temp;
}

const quick_sort = (q, l, r) => {
  if (l >= r) return;
  let x = q[l], i = l - 1, j = r + 1;
  while (i < j) {
    do { i++ } while (q[i] < x);
    do { j-- } while (q[j] > x);
    if (i < j) swap(q, i, j);
  }
  quick_sort(q, l, j);
  quick_sort(q, j + 1, r);
}

let q = [3, 2, 6, 4, 1];
quick_sort(q, 0, q.length - 1);
console.log(q);