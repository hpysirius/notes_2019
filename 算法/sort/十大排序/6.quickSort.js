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
  [q[i], q[j]] = [q[j], q[i]];
}


const quick_sort = (q, l, r) => {
  if (l >= r) return;
  let x = q[l + r >> 1], i = l - 1, j = r + 1;
  while (i < j) {
    while (q[++i] < x);
    while (q[--j] > x);
    if(i < j) swap(q, i, j);
  }
  quick_sort(q, l, j);
  quick_sort(q, j + 1, r);
}


let q = [49, 59, 88, 37, 98, 97, 68, 54, 31, 3];
quick_sort(q, 0, q.length - 1);
console.log(q);