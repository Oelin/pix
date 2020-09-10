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



function assem(ast) {
}



function psm(src) {
  let ast
  let lines

  src = prune(src)
  lines = src.split('\n')

  names(lines)

  .forEach((name, n) =>
    src = src.replaceAll(`$${name}`, n)
    .replaceAll(`${name}:`, ''))

  ast = parse(src.split('\n'))
  return assem(ast)
}
