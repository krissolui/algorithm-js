const EMPTY = '.';

function isValidSudoku(board) {
	const size = board.length;
	const rows = new Array(size).fill(0).map(() => new Set());
	const cols = new Array(size).fill(0).map(() => new Set());
	const grids = new Array(size).fill(0).map(() => new Set());

	for (let r = 0; r < size; r++) {
		for (let c = 0; c < size; c++) {
			const val = board[r][c];
			if (val === EMPTY) continue;

			const gridId = getGridId(r, c);
			rows[r].add(val);
			cols[c].add(val);
			grids[gridId].add(val);
		}
	}

	return solveBacktrack(board, rows, cols, grids);
}

const solveBacktrack = (board, rows, cols, grids, r = 0, c = 0) => {
	if (r === board.length || c === board[0].length) return true;

	const val = board[r][c];
	const nextCol = c === board[0].length - 1 ? 0 : c + 1;
	const nextRow = c === board[0].length - 1 ? r + 1 : r;
	const gridId = getGridId(r, c);
	const row = rows[r];
	const col = cols[c];
	const grid = grids[gridId];
	if (val === EMPTY) {
		for (let num = 1; num <= 9; num++) {
			const val = String(num);
			if (!isValid(row, col, grid, val)) continue;

			row.add(val);
			col.add(val);
			grid.add(val);

			if (solveBacktrack(board, rows, cols, grids, nextRow, nextCol))
				return true;

			row.delete(val);
			col.delete(val);
			grid.delete(val);
		}
	} else if (solveBacktrack(board, rows, cols, grids, nextRow, nextCol))
		return true;

	return false;
};

const getGridId = (row, col) => {
	return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

const isValid = (row, col, grid, val) => {
	return !(row.has(val) || col.has(val) || grid.has(val));
};
