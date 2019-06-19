/**
 * 选择排序
 * 思路：
 * 找到未排序中最小值的下标
 * 放到已排序的末尾
 * 重复操作
 */
function selectionSort(arr) {
  const len = arr.length;
  let minIndex; let
    temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
const a = [1, 43, 21, 4];
console.log(selectionSort(a));
