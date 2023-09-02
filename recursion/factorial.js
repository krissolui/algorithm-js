const findFactorialRecursive = (number) => {
	if (number < 0) throw 'number must not be negative';

	if (number <= 1) return 1;

	return number * findFactorialRecursive(number - 1);
};

const findFactorialIterative = (number) => {
	if (number < 0) throw 'number must not be negative';

	let answer = 1;
	for (let i = 2; i <= number; i++) {
		answer *= i;
	}
	return answer;
};

const number = 5;
try {
	console.log(`Recursive: ${number}! = ${findFactorialRecursive(number)}`);
	console.log(`Iterative: ${number}! = ${findFactorialIterative(number)}`);
} catch (ex) {
	console.error(ex);
}
