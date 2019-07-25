function getLen(root, node1, node2){
    const nodePath1 = [];
    const nodePath2 = [];
    // 查询节点
    var findNode = function(node, fNode, pathArray){
        if(node === null || fNode === null){
            return false;
        }
        pathArray.push(node);
        if(node.val === fNode.val){
            return true;
        }
        if(root.left !== null){
            if(findNode(node.left, fNode, pathArray)){
                return true;
            }
        }
        if(root.right !== null){
            if(findNode(node.right, fNode, pathArray)){
                return true;
            }
        }
        pathArray.pop();
    }

    findNode(root, node1, nodePath1);
    findNode(root, node2, nodePath2);

    console.log(nodePath1);
    console.log(nodePath2);
    let length = 0;
    nodePath1.forEach((node1, index1) => {
        nodePath2.forEach((node2, index2) => {
            if(node1.val === node2.val){
                length = nodePath1.length - index1 - 1 + (nodePath2.length - index2 - 1);
            }
        })
    })
    return length;

}


const node = {
    val: 7,
    left: {
        val: 4,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}

getLen(node, {val: 7, left: null, right: null}, {val: 9, left: null, right: null})