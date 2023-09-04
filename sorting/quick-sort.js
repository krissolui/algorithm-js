const quickSort = (array) => {
	if (array.length < 2) return array;

	_quickSort(array, 0, array.length - 1);
};

const _pickPivot = (length) => {
	// return 0; // pick first
	// return length - 1; // pick last
	return Math.floor(length / 2); // pick mid
	// return Math.floor(Math.random() * length); // pick random
};

const _quickSort = (array, left, right) => {
	const length = right - left + 1;
	let i = left;
	let j = right;
	let pivot = left + _pickPivot(length);
	let pivotValue = array[pivot];

	while (i < j) {
		while (array[i] < pivotValue) i++;

		while (array[j] > pivotValue) j--;

		if (i < j) {
			const tmp = array[j];
			array[j] = array[i];
			array[i] = tmp;
			if (i === pivot) {
				pivot = j;
				i++;
			} else if (j === pivot) {
				pivot = i;
				j--;
			} else {
				i++;
				j--;
			}
		}
	}

	if (pivot > left + 1) _quickSort(array, left, pivot - 1);
	if (pivot < right - 1) _quickSort(array, pivot + 1, right);
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(numbers);
console.log(numbers);
