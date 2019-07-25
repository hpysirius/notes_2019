/**
 * 选择排序
 * 思路：
 * 找到未排序中最小值的下标
 * 放到已排序的末尾
 * 重复操作
 */

function selectionSort(arr){
  const size = arr.length;
  let minIndex, tmp;
  for(let i = 0; i < size - 1; i++){
    minIndex = i;
    for(let j = i + 1; j < size; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

const a = [2,41,12];
console.log(selectionSort(a));