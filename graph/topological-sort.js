// n: number of nodes, value = 0 to n - 1

// Space complexity: O(n^2)
// Time complexity: O(p + n^2)
const TopologicalSortWithAdjacentList = (n, prerequisites) => {
	const inDegree = new Array(n).fill(0);
	const adjList = inDegree.map(() => []);
	for (let [child, prerequisite] of prerequisites) {
		// O(p)
		inDegree[child]++;
		adjList[prerequisite].push(child);
	}

	const stack = [];
	let remaining = n;
	for (let i = 0; i < n; i++) {
		if (inDegree[i] === 0) stack.push(i);
	}

	// O(n^2)
	while (stack.length > 0) {
		const index = stack.pop();
		const children = adjList[index];
		for (let childIndex of children) {
			inDegree[childIndex]--;
			if (inDegree[childIndex] === 0) stack.push(childIndex);
		}
		remaining--;
	}

	return remaining === 0;
};

// Space complexity: O(n)
// Time complexity: O(np)
const TopologicalSortOptimal = (n, prerequisites) => {
	const inDegree = new Array(n).fill(0);
	for (let [child, _] of prerequisites) {
		// O(p)
		inDegree[child]++;
	}

	const stack = [];
	let remaining = n;
	for (let i = 0; i < n; i++) {
		// O(n)
		if (inDegree[i] === 0) stack.push(i);
	}

	while (stack.length > 0) {
		const index = stack.pop();
		for (let [child, prerequisite] of prerequisites) {
			if (prerequisite !== index) continue;

			inDegree[child]--;
			if (inDegree[child] === 0) stack.push(child);
		}
		remaining--;
	}

	return remaining === 0;
};

const n = 6;
const prerequisites = [
	[1, 0],
	[2, 1],
	[2, 5],
	[0, 3],
	[4, 3],
	[3, 5],
	[4, 5],
];
console.log(
	'Expect result: true, actural:',
	TopologicalSortWithAdjacentList(n, prerequisites)
);

console.log(
	'Expect result: true, actural:',
	TopologicalSortOptimal(n, prerequisites)
);
