// psm.js, the pixy assembler


const white = /^\s*[\r\n]+|#.*/gm
const name = /^(\w+):/g
const nend = /:[\n\s]+/g


function prune(src) {
  return src.replaceAll(white, '')
  .replaceAll(nend, ':').trim()
}


function enum(src) {
  // * find names/labels and their line numbers
  // * replace instances of those names with the line numbers
}


function parse(src) {
  // * 
}


function asm(parsed) {
  // * given the opcode, rn, rs and val, produce the data for an instruction
  // * or, given an item of data, convert it to some binary representation.
}
