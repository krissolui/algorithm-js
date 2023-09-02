//Implement a function that reverses a string using iteration...and then recursion!
const reverseStringIterative = (str) => {
	if (str.length < 2) return str;
	let answer = '';
	for (let i = str.length - 1; i >= 0; i--) {
		answer += str.charAt(i);
	}
	return answer;
};

const reverseStringRecursive = (str) => {
	if (str.length < 2) return str;
	return reverseStringRecursive(str.substr(1)) + str.charAt(0);
};

const str = 'yoyo mastery';
console.log(reverseStringIterative(str));
console.log(reverseStringRecursive(str));
//should return: 'yretsam oyoy'
