// spp.js, a simulated pixy processor to run pixy binaries.



class ram 
{
  
}
  


class latch
{
  this.value = 0x0000
  this.write = (v => this.value = v).bind(this)
  this.read = (() => this.value).bind(this)
}



function pixy(ticks)
{
  this.pc = latch()
  this.ir = latch()
  this.ur = [0,0,0,0,0].map(latch)
  this.events = []
}



pixy.prototype.tick = function()
{
  
}



// notes:
// circuitverse has a maxium RAM size of 1Mx32b which is a 4MB python array.
// stdout is memory-mapped at address 0x0000.
