// O(n^2)
// ~O(n) for nearly sorted list
const insertionSort = (array) => {
	if (array.length < 2) return array;

	for (let i = 1; i < array.length; i++) {
		if (array[i] >= array[i - 1]) continue;
		const tmp = array[i];
		if (tmp < array[0]) {
			array.splice(i, 1);
			array.unshift(tmp);
			continue;
		}
		for (let j = i - 2; j > 0; j--) {
			if (tmp >= array[j]) {
				array.splice(i, 1);
				array.splice(j + 1, 0, tmp);
				break;
			}
		}
	}
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers);
console.log(numbers);
