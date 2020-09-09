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



function parse(lines) {
}



function asm(parsed) {
}



function main(src) {
  src = prune(src).split('\n')
  names(src)
    
  .forEach((name, n) =>
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, ''))

  return src
}
