/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const isValidBST = (root) => {
	return _isValidBST(root, -Infinity, Infinity);
};

const _isValidBST = (root, low, high) => {
	if (!root) return !root?.left && !root?.right;

	if (root.val >= high || root.val <= low) return false;

	if (root.left && root.left?.val >= root.val) return false;

	if (root.right && root.right?.val <= root.val) return false;

	return (
		_isValidBST(root.left, low, root.val) &&
		_isValidBST(root.right, root.val, high)
	);
};
