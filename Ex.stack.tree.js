/* containsInTree(x) - returns true if x is in the tree
addToStart(x)
addToEnd(x)
isEmpty()
isFull()
removeFirst(x) - removes first element that equals x */

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const traverseTree = (node) => {
    if (!node) {
        return;
    }
    traverseTree(node.left);
    traverseTree(node.right);
    console.log(node.data);
}
let head = new TreeNode(20);
let node1 = new TreeNode(15);
let node2 = new TreeNode(1337);
let node3 = new TreeNode(2000);
head.left = node1;
head.right = node2;
node2.right = node3;
traverseTree(head);
// console.log(head)