// psm.js, the pixy assembler


const white = /^\s*[\r\n]+/gm
const eolb = /:[\n\s]+/g
const note = /#.*/g


function prune(src) {
  return src.replaceAll(white, '')
  .replaceAll(eolb, ':')
}
