// https://leetcode.com/problems/house-robber

const rob = (nums) => {
	const robCache = cached();
	return robCache(nums);
};

function cached() {
	const cache = {};

	const robRecursive = (nums) => {
		const len = nums.length;
		if (len <= 2) return Math.max(...nums);
		if (len in cache) return cache[len];

		cache[len] = Math.max(
			nums[0] + robRecursive(nums.slice(2)),
			robRecursive(nums.slice(1))
		);

		return cache[len];
	};
	return robRecursive;
}

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums)); // expected 12
