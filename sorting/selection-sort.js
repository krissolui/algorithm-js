// O(n^2)
const selectionSort = (array) => {
	if (array.length < 2) return array;

	for (let i = 0; i < array.length - 1; i++) {
		let min = array[i];
		let minIndex = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < min) {
				minIndex = j;
				min = array[j];
			}
		}

		array[minIndex] = array[i];
		array[i] = min;
	}
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers);
console.log(numbers);
