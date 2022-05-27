/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    if (root.left === null && root.right === null) return root;
    
    if (root.left === null) {
        root.left = root.right;
        root.right = null;
    } else if (root.right === null){
        root.right = root.left;
        root.left = null;
    }else {
        const left = root.left;
        root.left = root.right;
        root.right = left;
    }
    invertTree(root.left);
    invertTree(root.right);
    return root;
    
};