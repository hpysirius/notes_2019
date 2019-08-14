### 模版1
当我们将区间`[l, r]`划分成`[l, mid]`和`[mid + 1, r]`时，其更新操作是`r = mid`或者`l = mid + 1`， 计算`mid`时不需要加`1`
```js
const search1 = (l, r) => {
    while(l < r){
        let mid = l + r >> 1;
        if(check(mid)) r = mid;
        else l = mid + 1;
    }
    return l;
}
```

### 模版2
当我们将区间`[l, r]`划分成`[l, mid - 1]`和`[mid, r]`时，其更新操作是`r = mid - 1` 或者`l = mid`; 此时为了防止死循环，计算`mid`时需要加`1`
```js
const search2 = (l, r) => {
    while(l < r){
        let mid = l + r + 1 >> 1;
        if(check(mid)) l = mid;
        else r = mid - 1;
    }
    return l;
}
```


二分查找![](https://github.com/hpysirius/notes_2019/blob/master/%E7%AE%97%E6%B3%95/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE/img.png)



### 二分的流程
1. 确定二分的边界
2. 编写二分的代码框架
3. 设计一个check(性质)
4. 判断一个区间如何更新
5. 如果更新方式写的是 `l  = mid, r = mid - 1,`选模版2，反之模版1