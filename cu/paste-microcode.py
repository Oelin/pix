# paste-microcode.py
# generates microcode for the CU which can be pasted into circuitverse.



# paste data for an empty ROM.

raw = '{"layout":{"width":100,"height":40,"title_x":50,"title_y":13,"titleEnabled":true},"allNodes":[{"x":-60,"y":-20,"type":0,"bitWidth":7,"label":"ADDRESS","connections":[]},{"x":-60,"y":0,"type":0,"bitWidth":16,"label":"DATA IN","connections":[]},{"x":-60,"y":20,"type":0,"bitWidth":1,"label":"WRITE","connections":[]},{"x":0,"y":40,"type":0,"bitWidth":1,"label":"RESET","connections":[]},{"x":-20,"y":40,"type":0,"bitWidth":1,"label":"CORE DUMP","connections":[]},{"x":60,"y":0,"type":1,"bitWidth":16,"label":"DATA OUT","connections":[]}],"id":63235179569,"name":"pix microcode","EEPROM":[{"x":630,"y":150,"objectType":"EEPROM","label":"","direction":"RIGHT","labelDirection":"UP","propagationDelay":100,"customData":{"constructorParamaters":["RIGHT",16,7,<microcode>],"nodes":{"address":0,"dataIn":1,"write":2,"reset":3,"coreDump":4,"dataOut":5}}}],"restrictedCircuitElementsUsed":[],"nodes":[],"scopes":[],"logixClipBoardData":true}'



# pixy microcode, 128 rows.

code = [768, 160, 40960, 18432, 5120, 0, 0, 0, 768, 160, 32784, 18432, 5122, 0, 0, 0, 768, 160, 40960, 18432, 5121, 0, 0, 0, 768, 160, 32784, 18432, 5121, 0, 0, 0, 768, 160, 40960, 18432, 5122, 0, 0, 0, 768, 160, 40960, 18432, 5123, 0, 0, 0, 768, 160, 40960, 18432, 5124, 0, 0, 0, 34816, 160, 0, 5125, 0, 0, 0, 0, 768, 160, 8448, 8, 0, 0, 0, 0, 768, 160, 12288, 0, 0, 0, 0, 0, 768, 160, 4112, 0, 0, 0, 0, 0, 768, 160, 272, 4128, 0, 0, 0, 0, 768, 160, 2304, 8256, 0, 0, 0, 0, 768, 160, 272, 8256, 0, 0, 0, 0, 768, 160, 40960, 18432, 1025, 0, 0, 0, 768, 160, 32784, 18432, 5126, 0, 0, 0]



final = raw.replace('<microcode>', str(code).replace(', ', ','))
print('[+] paste the following data into a circuit\n')
print(final)
