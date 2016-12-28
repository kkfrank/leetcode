/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return loop(root,p,q);
};
function loop(root, p, q){
	while(root){
		if(p.val>root.val && q.val>root.val){
			root=root.right;
		}else if(p.val<root.val && q.val<root.val){
			root=root.left;
		}else{
			return root;
		}
	}
	return null;
}
function dfs(root, p, q){
	if(!root){return null;}
    if(p.val>root.val && q.val>root.val){
    	return lowestCommonAncestor(root.right,p,q)
    }else if(p.val<root.val && q.val<root.val){
    	return lowestCommonAncestor(root.left,p,q)
    }else{
    	return root;
    }
}
