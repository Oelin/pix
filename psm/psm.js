// psm.js, the pixy assembler



// opcode table

const opcodes = [
	'add r r',
  'add r v',
	'sub r r',
	'sub r v',
	'and r r',
	'or r r',
	'xor r r',
	'not r',
	'b v',
	'mov r r',
	'mov r v',
	'up r v',
	'sto v r',
	'sto r r'
]



// preprocessors

const purify = code =>
  code.split('\n')
  .filter(line => line && !line.startsWith('#'))
  .map(line => line.trim())
  .join('\n')
  .replaceAll(/:[\n\s]+/g, ':')



const names = code => 
  code.split('\n')
  .map(line => line.match(/^(\w+):/))
  .map((match, num) => match && [match[1], num])
  .filter(Boolean)



function sub(code, name, num) {
  return code.replaceAll(`$${name}`, num)
	.replace(`${name}:`, '')
}



// parser

function *parse(lines) {

}



// assemble to machine code 

function asm(parsed) {
	
}



const main = code => {

}
