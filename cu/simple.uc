# pix instruction set


model 0.1
word XI, YI, SO, NI, NO, ALO, PO, ARI, IRI, CO, CI, VO, B 
data ALS 3


# add <rn>, <rs>

set PO, ARI
set IRI, CI
set XI, SO
set YI, NO
set NI, ALO, ALS = 2


# add <rn>, <value>

set PO, ARI
set IRI, CI
set XI, VO
set YI, NO
set NI, ALO, ALS = 2

# sub <rn>, <rs>

set PO, ARI
set IRI, CI
set XI, SO
set YI, NO
set NI, ALO, ALS = 6


# sub <rn>, <value>

set PO, ARI
set IRI, CI
set XI, VO
set YI, NO
set NI, ALO, ALS = 6


# and <rn>, <rs>

set PO, ARI
set IRI, CI
set XI, SO
set YI, NO
set NI, ALO


# or <rn>, <rs>

set PO, ARI
set IRI, CI
set XI, SO
set YI, NO
set NI, ALO, ALS = 1


# xor <rn>, <rs>

set PO, ARI
set IRI, CI
set XI, SO
set YI, NO
set NI, ALO, ALS = 3


# not <rn>

set PO, ARI
set IRI, CI
set XI, NO
set NI, ALO, ALS = 4


# b <rs>

set PO, ARI
set IRI, CI


# mov <rn>, <rs>

set PO, ARI
set IRI, CI


# mov <rn>, <value>

PO, ARI
IRI, CI


# load <rn>, [<rs>]

PO, ARI
IRI, CI


# sto <value>, [<rn>]

PO, ARI
IRI, CI


# sto <rs>, [<rn>]

PO, ARI
IRI, CI


# test <rn>, <rs>

PO, ARI
IRI, CI


# stop

PO, ARI
IRI, CI
