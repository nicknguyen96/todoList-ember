class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function buildBst(input) {
    return buildBstHelper(input, 0, input.length - 1);
}

function buildBstHelper(arr, start, end) {
    if (start > end) return null;
    let middle = Math.floor((end + start) / 2);
    let node = new Node(arr[middle]);
    node.left = buildBstHelper(arr, start, middle - 1);
    node.right = buildBstHelper(arr, middle + 1, end);
    return node;

}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bst = buildBst(input);
console.log("input array", input);
console.log("building BST" , bst);
console.log("height of this bst is ", height(bst))
console.log("In-order traversal");
console.log(inOrder(bst));
console.log("Post-order traversal");
console.log(postOrder(bst));
console.log("Pre-order traversal");
console.log(preOrder(bst));
console.log("Level Order traversal");
console.log(levelOrder(bst));


/**
 * preOrder is visiting the root left right
 * @param {Node} root 
 */
function preOrder(root){
    let list = [];
    if (root == null) return list;
    list.push(root.value);
    if (root.left != null){
        list = [...list, ...preOrder(root.left)];
    }
    if (root.right != null){
        list = [...list, ...preOrder(root.right)];
    }
    return list;
}

/**
 * postOrder is visiting left right root
 * dfs
 */
function postOrder(root){
    let list = [];
    if (root == null) return list;
    if (root.left != null){
        list = postOrder(root.left);
    }
    if (root.right != null){
        list = [...list ,...postOrder(root.right)];
    }
    list.push(root.value);
    return list;
}

/**
 * inOrder is visiting left root right
 * Use case: Inorder return a list of non-decreasing order 
 * @param {Node} root root of the bst
 */
function inOrder(root){
    let list = [];
    if (root.left != null){
        list = [...inOrder(root.left)];
    }
    list.push(root.value);
    if (root.right !=null){
        list = [...list, ...inOrder(root.right)];
    }
    return list;
}

/**
 * level Order is visiting the node level by level
 * Use case: breath first search (bfs)
 * @param {Node} root root of the binary search tree
 * @returns list in level order
 */
function levelOrder(root){
    let list = [];
    if (root == null) return list;
    let queue = [];
    queue.push(root);
    while (queue.length > 0){
        let current = queue.shift();
        list.push(current.value);
        if (current.left != null){
            queue.push(current.left);
        }
        if (current.right != null){
            queue.push(current.right);
        }
    }

    return list;
}

function height(root){
    if (!root) return 0;
    return Math.max(height(root.left), height(root.right)) + 1;
}

function printNodeInLevelOrder(root){
    let getHeight = height(root);
    let list = levelOrder(root);
    let currentLevel = 1;
    let currentNode = 0;
    let result = '';
    while (currentLevel <= getHeight){
        for (let i = 0; i < Math.pow(2, currentLevel - 1); i++){
            if (currentNode == list.length) break;
            result += `${list[currentNode]} `;
            currentNode++;
        }
        result += "\n";
        currentLevel+=1;
    }
    return result;
}

//              5
//            /    \
//          /        \
//        2            7
//      /  \         /   \
//    /     \       /     \
//   1       3     6       8
//            \              \          
//             4              9

console.log(printNodeInLevelOrder(bst))