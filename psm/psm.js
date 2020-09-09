// psm.js, the pixy assembler


let white = /^\s*[\r\n]+|#.*/gm
let name = /^([a-zA-Z_][\w_]*):/
let nend = /:[\n\s]+/g


function prune(src) {
  return src.replaceAll(white, '')
  .replaceAll(nend, ':').trim()
}


function names(lines) {
  let m

  return lines.map(line =>
    (m = line.match(name)) && m[1])
}


function parse(src) {
  // return srcz	
}


function asm(parsed) {
  // * given the opcode, rn, rs and val, produce the data for an instruction
  // * or, given an item of data, convert it to some binary representation.
}


function main(src) {
  src = prune(src)
  let lines = src.split('\n')
  
  // replace names 

  names(lines).forEach((n, name) =>           
    name && 
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, '')
  )

  // parse src
  // assemble parsed
  // return 

  return src
}
