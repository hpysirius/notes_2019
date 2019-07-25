// 初始版本
function bubbleSort(arr){
    const size = arr.length;
    for(let i = 0; i < size - 1; i++){
        for(let j = 0; j < size - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
// 优化版本1
function bubbleSort1(arr){
    const size = arr.length;
    for(let i = 0; i < size - 1; i++){
        let flag = false;
        for(let j = 0; j < size - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                flag = true;
            }
        }
        if(flag){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort1([1,3,2,5,7,6]));