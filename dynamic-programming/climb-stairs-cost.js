const climbRecursive = (costs, n = 0) => {
	const len = costs.length;
	const cost = costs[n];
	if (n >= len - 2) return cost;
	return (
		cost +
		Math.min(climbRecursive(costs, n + 1), climbRecursive(costs, n + 2))
	);
};

const climbCache = (costs) => {
	let cost1 = costs[0];
	let cost2 = costs[1];
	const len = costs.length;

	const climbRec = () => {
		for (let i = 2; i < len; i++) {
			const cost = costs[i] + Math.min(cost1, cost2);
			cost1 = cost2;
			cost2 = cost;
		}

		return Math.min(cost1, cost2);
	};
	return climbRec;
};

const costs = [1, 2, 3, 4, 5, 6, 7];
console.log(climbRecursive(costs)); // must start at 0-th

console.log(climbCache(costs)()); // can start at 0-th / 1-st
