const insertionSort = arr => {
    const len = arr.length;
    let preIndex, current;
    for(let i = 1; i < len; i++){
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        } 
        arr[preIndex + 1] = current;
    }
    return arr;
}

console.log(insertionSort([3, 2, 1, 4]));