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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;
    
  const qu1 = [root.left];
  const qu2 = [root.right];
    
  while (qu1.length > 0 && qu2.length >0 ){
      const left = qu1.shift();
      const right = qu2.shift();
      
      if (left === null && right === null) continue;
      
      if (left === null || right === null) return false;
      if (left.val !== right.val) return false;
      
      qu1.push(left.left)
      qu2.push(right.right)
      qu1.push(left.right)
      qu2.push(right.left)
  }
    
  return true;
};

