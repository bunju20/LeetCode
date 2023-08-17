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
 * @return {number}
 */
var maxLevelSum = function(root) {
    const sums = [-Infinity];
    DFS(root, 1);
    return sums.indexOf(Math.max(...sums));
      
    function DFS(node, level) {
        if(!node) return;
        if(sums[level] === undefined) sums.push(node.val);
        else sums[level] += node.val;
        
        DFS(node.left, level+1);
        DFS(node.right, level+1);
    }
};