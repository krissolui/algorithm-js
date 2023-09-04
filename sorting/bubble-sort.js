// O(n^2)
const bubbleSort = (array) => {
	if (array.length < 2) return array;

	const pushCell = (i) => {
		const tmp = array[i];
		array[i] = array[i + 1];
		array[i + 1] = tmp;
	};

	for (let a = array.length - 1; a > 0; a--) {
		for (let b = 0; b < a; b++) {
			if (array[b] > array[b + 1]) pushCell(b);
		}
	}
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers);
console.log(numbers);
