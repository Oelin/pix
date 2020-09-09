// psm.js, the pixy assembler


let white = /^\s*[\r\n]+|#.*/gm
let name = /^([a-zA-Z_][\w_]*):/
let nend = /:[\n\s]+/g


let prune = src => {
  return src.replaceAll(white, '')
  .replaceAll(nend, ':').trim()
}


let names = lines => {
  let m

  return lines.map(line =>
    (m = line.match(name)) && m[1])
}


let parse = lines => {
  // if 
}


let asm = parsed => {
  // * given the opcode, rn, rs and val, produce the data for an instruction
  // * or, given an item of data, convert it to some binary representation.
}


let main = src => {
  src = prune(src).split('\n')
  names(src)
  
  .forEach((name, n) =>
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, '')
  )

  return src
}
