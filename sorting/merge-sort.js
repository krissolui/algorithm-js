// O(nlog(n))
const mergeSort = (array) => {
	if (array.length < 2) return array;
	const mid = (array.length + 1) / 2;

	return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
};

const merge = (left, right) => {
	let leftIndex = 0,
		rightIndex = 0;
	let leftLength = left.length,
		rightLength = right.length;
	const answer = [];
	while (leftIndex < leftLength && rightIndex < rightLength) {
		if (left[leftIndex] <= right[rightIndex]) {
			answer.push(left[leftIndex]);
			leftIndex++;
			continue;
		}
		answer.push(right[rightIndex]);
		rightIndex++;
	}

	if (leftIndex >= leftLength) return answer.concat(right.slice(rightIndex));

	return answer.concat(left.slice(leftIndex));
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);
