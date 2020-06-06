// spp.js, a simulated pixy processor to run pixy binaries.



const ram = size => new Int8Array(1 << size)



function cell() {
  this.value = 0x0000
}



cell.prototype.w = v => this.value = v
cell.prototype.r = () => this.value



function pixy() {
  this.cells = [0,0,0,0,0,0,0,0].map(cell)
  this.events = []
}



pixy.prototype.tick = () => {
  for (let e of this.events) e.bind(this)();
}



// notes:
// circuitverse has a maxium RAM size of 1Mx32b which is a 4MB python array.
// stdout is memory-mapped at address 0x0000.
