/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    } else if (!root.left && !root.right) {
       return 1;
    } else {
         return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
};
