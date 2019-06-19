/**
 * 插入排序
 * 思路：
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 * 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
 * （如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */

function insertionSort(arr) {
  const len = arr.length;
  let preIndex; let
    current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}


const a = [33, 1, 43, 21, 4];
console.log(insertionSort(a));

// i = 1, preIndex = 0; while = true
// arr = [33, 33, 43, 21, 4];
// arr = [1, 33, 43, 21, 4];
// i = 2, preIndex = 1
// i = 3， preIndex = 2, current = 21
// 循环两次
// arr = [1, 21, 33, 43, 4];
