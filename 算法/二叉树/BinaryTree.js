
function BinaryTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }




    // 插入
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
    // 中序排列
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    }
    // 前序遍历
    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }
    // 后序遍历
    // 可以运用到操场系统的文件夹遍历中
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    }
    // 查找最小值
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    this.min = function () {
        return minNode(root);
    }
    // 查找最大值
    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    this.max = function () {
        return maxNode(root);
    }

    // 查询任何一个值
    var findValNode = function (node, val) {
        if (node === null) {
            return false;
        }
        if (node.key === val) {
            return true;
        }
        if (val < node.key) {
            return findValNode(node.left, val);
        } else {
            return findValNode(node.right, val);
        }
    }
    this.findVal = function (val) {
        return findValNode(root, val);
    }
    // 查找最小子节点
    var findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
    }
    // 删除节点
    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            // 删除叶子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // 节点只有一个左或者右子树
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // 查找右子树的最小子节点
            var aux = findMinNode(node.right);
            // 替换删除节点的值
            node.key = aux.key;
            // 删除右子树中最小子节点
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    }
    this.remove = function (val) {
        root = removeNode(root, val);
    }

}


var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach(element => {
    binaryTree.insert(element);
});
console.log(binaryTree);

var callback = function (key) {
    console.log(key);
}
binaryTree.inOrderTraverse(callback);   