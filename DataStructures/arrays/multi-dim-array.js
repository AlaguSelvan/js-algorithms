function make2DArray(cols, rows) {
	let array = new Array(cols)
	for(let i = 0; i <= cols; i ++) {
		array[i] = new Array(rows)
	}
	return array
}

const output = make2DArray(5, 3)

console.log(output)