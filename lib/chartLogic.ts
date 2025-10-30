export function generatePlaceholderChart(seed: number = 1): number[][] {
	const rnd = (i: number) => ((i * 9301 + 49297) % 233280) / 233280
	const grid: number[][] = []
	for (let r = 0; r < 3; r++) {
		const row: number[] = []
		for (let c = 0; c < 3; c++) {
			seed++
			row.push(Math.floor(rnd(seed) * 12) + 1)
		}
		grid.push(row)
	}
	return grid
}
