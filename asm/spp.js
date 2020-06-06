// spp.js, a simulated pixy processor to run pixy binaries.



function ram(size) {
  this.data = new Int8Array(1 << size)
  this.ports = {}
}



ram.prototype.port = (at, fun) => this.ports[at] = fun
ram.prototype.write = (at, value) => (this.ports[at] || () => this.data[at] = value).bind(this)()
ram.prototype.read = (at) => (this.ports[at] || () => this.data[at]).bind(this)()


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



pixy.prototype.add = event => this.events.push(event)



// notes:
// circuitverse has a maxium RAM size of 1Mx32b which is a 4MB python array.
// stdout is memory-mapped at address 0x0000.
