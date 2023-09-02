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

// O(2^n)
const fibonacciRecursive = (n) => {
	if (n < 0) throw 'n must not be negative';
	if (n < 2) return n;

	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

const number = 40;
try {
	console.log(
		`Iterative fibonacci(${number}) = ${fibonacciIterative(number)}`
	);
	console.log(
		`Recursive fibonacci(${number}) = ${fibonacciRecursive(number)}`
	);
} catch (ex) {
	console.error(ex);
}
