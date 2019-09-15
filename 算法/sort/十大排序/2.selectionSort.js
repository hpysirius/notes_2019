/**
 * 选择排序
 * 思路：
 * 找到未排序中最小值的下标
 * 放到已排序的末尾
 * 重复操作
 */
const selectionSort = nums => {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++)
      if (nums[j] < nums[min]) min = j;
    let t = nums[i];
    nums[i] = nums[min];
    nums[min] = t;
  }
  return nums;
}


const a = [2, 41, 12];
console.log(selectionSort(a));