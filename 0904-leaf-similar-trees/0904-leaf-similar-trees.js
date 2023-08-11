var leafSimilar = function(root1, root2) {
  let arr1 = [];
  let arr2 = [];
  dfs(root1, arr1);
  dfs(root2, arr2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
    
};

function dfs(root, arr) {
  if (!root) return;
  if (!root.left && !root.right) {
      arr.push(root.val);
      return;
  }
  dfs(root.left, arr);
  dfs(root.right, arr);
}