// psm.js, the pixy assembler


let white = /^\s*[\r\n]+|#.*/gm
let name = /^([a-zA-Z_][\w_]*):/
let nend = /:[\n\s]+/g


function prune(src) {
  return src.replaceAll(white, '')
  .replaceAll(nend, ':').trim()
}


function names(src) {
  let m

  return src.map(line =>
    (m = line.match(name)) && m[1])
		
  .filter(m => m)
}


function parse(src) {
  //return src.
}


function asm(parsed) {
  // * given the opcode, rn, rs and val, produce the data for an instruction
  // * or, given an item of data, convert it to some binary representation.
}
