# spp.py, a simulated pixy processor to run pixy binaries.



class ram: pass
  
  

class latch:
  def __init__(self): self.value = 0x0000
  def write(self, value): self.value = value
  def read(self): return self.value
  
  

class pixy:
  
  def __init__(self, ticks):
    self.registers = []
    self.p = 1 / ticks
  
  def pc(self): return self.registers[-1]
    
  def tick():
    pass
  
  def

  

# notes:
# circuitverse has a maxium RAM size of 1Mx32b which is a 4MB python array.
# stdout is memory-mapped at address 0x0000.
