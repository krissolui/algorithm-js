// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...

// O(n)
const fibonacciIterative = (n) => {
	if (n < 0) throw 'n must not be negative';
	if (n < 2) return n;

	const prev = [0, 1];
	for (let i = 2; i <= n; i++) {
		const current = prev[0] + prev[1];
		prev[0] = prev[1];
		prev[1] = current;
	}
	return prev[1];
};

const fibonacciCached = () => {
	const cache = {};
	const fibonacciRecursive = (n) => {
		if (n < 0) throw 'n must not be negative';
		if (n in cache) return cache[n];
		if (n < 2) return n;

		cache[n] = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
		return cache[n];
	};
	return fibonacciRecursive;
};
const fibonacci = fibonacciCached();

const number = 40;
try {
	console.log(
		`Iterative fibonacci(${number}) = ${fibonacciIterative(number)}`
	);
	console.log(`Recursive fibonacci(${number}) = ${fibonacci(number)}`);
} catch (ex) {
	console.error(ex);
}
