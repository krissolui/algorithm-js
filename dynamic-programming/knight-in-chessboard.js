const getNewPos = (row, col, i) => {
	const [r, c] = directions[i];
	return [row + r, col + c];
};

const directions = [
	[-2, -1],
	[-2, 1],
	[2, -1],
	[2, 1],
	[-1, -2],
	[-1, 2],
	[1, -2],
	[1, 2],
];

/**
 *
 * @param {number} n size of chessboard: n x n
 * @param {number} r initial row
 * @param {number} c initial col
 * @param {number} k number of moves
 */
const KnightProbabilityInChessboard = (n, r, c, k) => {
	if (r < 0 || r >= n || c < 0 || c >= n) return 0;
	if (k === 0) return 1;

	let res = 0;
	for (let i = 0; i < directions.length; i++) {
		const [row, col] = getNewPos(r, c, i);
		res += KnightProbabilityInChessboard(n, row, col, k - 1) / 8;
	}

	return res;
};

const KnightProbabilityInChessboardDP = (n, r, c, k) => {
	const dp = new Array(k + 1)
		.fill(0)
		.map(() => new Array(n).fill(0).map(() => new Array(n).fill(null)));

	const recursive = (n, k, r, c) => {
		if (r < 0 || r >= n || c < 0 || c >= n) return 0;
		if (k === 0) return 1;

		if (dp[k][r][c] !== null) return dp[k][r][c];

		let res = 0;
		for (let i = 0; i < directions.length; i++) {
			const [row, col] = getNewPos(r, c, i);
			res += recursive(n, k - 1, row, col, dp) / 8;
		}
		dp[k][r][c] = res;
		return res;
	};

	return recursive(n, k, r, c);
};

const KnightProbabilityInChessboardBU = (n, r, c, k) => {
	let prevBoard = new Array(n).fill(0).map(() => new Array(n).fill(0));
	prevBoard[r][c] = 1;

	for (let step = 1; step <= k; step++) {
		let curBoard = new Array(n).fill(0).map(() => new Array(n).fill(0));
		for (let row = 0; row < n; row++) {
			for (let col = 0; col < n; col++) {
				for (let i = 0; i < directions.length; i++) {
					const [r, c] = getNewPos(row, col, i);
					if (r < 0 || r >= n || c < 0 || c >= n) continue;
					curBoard[row][col] += prevBoard[r][c] / 8;
				}
			}
		}
		prevBoard = curBoard;
	}

	let res = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			res += prevBoard[i][j];
		}
	}
	return res;
};

console.log(KnightProbabilityInChessboard(6, 2, 2, 2));
console.log(KnightProbabilityInChessboardDP(6, 2, 2, 2));
console.log(KnightProbabilityInChessboardBU(6, 2, 2, 2));
