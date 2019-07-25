function getLength(root, node1, node2) {
    // 获取节点关键路径
    function getPathFromRoot(root, node, pathArray) {
        if (root == null || node === null) {
            return false;
        }
        pathArray.push(root);

        if (root.val == node.val) {
            return true;
        }
        if (root.left !== null) {
            if (getPathFromRoot(root.left, node, pathArray) === true) {
                return true;
            }
        }
        if (root.right !== null) {
            if (getPathFromRoot(root.right, node, pathArray) === true) {
                return true;
            }
        }
        pathArray.pop();
        return false;
    }

    const pathArray1 = [];
    const pathArray2 = [];

    getPathFromRoot(root, node1, pathArray1);
    getPathFromRoot(root, node2, pathArray2);

    let length = 0;
    pathArray1.forEach((node1, index1) => {
        pathArray2.forEach((node2, index2) => {
            if (node1.val === node2.val) {
                length = pathArray1.length - index1 - 1 + (pathArray2.length - index2 - 1);
            }
        })
    })

    return length;
}