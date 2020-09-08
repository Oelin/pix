// psm.js, the pixy assembler



const white = /^\s*[\r\n]+|#.*/gm
const lend = /:[\n\s]+/g



function prune(src) {
	return src.replaceAll(white, '')
	.replaceAll(lend, ':').trim()
}
