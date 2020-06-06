# CU

The CU or control unit, is responsible for turning a given instruction into a sequence of signals sent to CPU components. 



### μ-code
The instruction `adv r1, 10` adds 10 to the value in register 1. The CU would execute this by breaking it down into four simpler micro-operations.

1. copy the value of r1 into ALU register X
2. copy the valeu of imm (10) into ALU register Y
3. Tell the ALU add and copy the result into r1

The microcode for each instruction is stored on a ROM. The CU uses an instruction's opcode and the step it's on to look up which signals to produce in the ROM. 

### Signals
Pixy microcode has access to 16 control signals. `in` means to read data and `out` means to write data.

| Signal       | Meaning                   |
|--------------|---------------------------|
| XI           | X register in             |
| YI           | Y register in             |
| AO           | source register in        |
| BI           | destination register in   |
| BO           | destination regiseter out |
| ALO          | ALU out                   |
| PO           | program counter out       |
| ARI          | address register in       |
| IRI          | instruction regiser in    |
| CO           | CPU out                   |
| CI           | CPU in                    |
| IMO          | immediate out             |
| B            | program counter branch    |
| ALS (3 bits) | ALU select operation      |

#### FN
The `FN` signal fires when no other signals are on. It asserts that an instruction has finished executing and tells the program counter to progress.
