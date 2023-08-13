var pathSum = function(root, targetSum) {
    let res = 0;
    const helper = (node, curr) => {
        if (!node) return;
        helper(node.left, curr + node.val);
        helper(node.right, curr + node.val)
        if (curr + node.val === targetSum) res += 1;
    }
    
    const dfs = (node) => {
        if (!node) return;
        helper(node, 0);
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    return res;
};