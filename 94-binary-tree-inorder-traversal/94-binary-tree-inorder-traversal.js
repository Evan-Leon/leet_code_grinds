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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) return [];
    const retArr = [];
    const leftArr = inorderTraversal(root.left);
    for (let ele of leftArr){
        retArr.push(ele)
    }
    retArr.push(root.val);
    const rightArr = inorderTraversal(root.right);
    for (let ele of rightArr){
        retArr.push(ele)
    }
    return retArr;
    
  
    
};