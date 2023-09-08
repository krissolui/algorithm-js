// https://leetcode.com/problems/climbing-stairs

const climbStairs = (n) => {
	return climb(n);
};

const climbCache = () => {
	const cache = new Map();
	const climbRecursive = (n) => {
		if (n <= 3) return n;
		if (cache.has(n)) return cache.get(n);

		cache.set(n, climbRecursive(n - 1) + climbRecursive(n - 2));
		return cache.get(n);
	};
	return climbRecursive;
};
const climb = climbCache();

console.log(climbStairs(43)); // expected 701408733
