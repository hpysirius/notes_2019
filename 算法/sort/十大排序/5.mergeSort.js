/**
 * 归并排序 分治
 * 1. 确定中间点：mid = (l + r) / 2
 * 2. 递归排序，left,right
 * 3. 归并：合二为一
 * 双指针算法
 */

const merge_sort = (q, l, r) => {
    if (l >= r) return;
    let mid = (l + r) >> 1;
    merge_sort(q, l, mid);
    merge_sort(q, mid + 1, r);
    let k = 0, i = l, j = mid + 1;
    let tmp = [];
    while (i <= mid && j <= r) tmp[k++] = q[i] <= q[j] ? q[i++] : q[j++];
    while (i <= mid) tmp[k++] = q[i++];
    while (j <= r) tmp[k++] = q[j++];
    for (i = l, j = 0; i <= r; i++ , j++) q[i] = tmp[j];
}

const p = [3, 2, 6, 8, 1];
merge_sort(p, 0, p.length - 1);
console.log(p);