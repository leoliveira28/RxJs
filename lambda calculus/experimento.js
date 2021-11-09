Number.prototype.log = function() { console.log(+this) }
Function.prototype.log = function() { console.log(this.toString()) }

let r = 3
r++

const I = a => a

r = I(3)
r.log()

const SELF = f => f(f)

r = SELF(I)

r.log()

const PRI = a => b => a

r = PRI(7)(11)

r.log()

const ULT = a => b => b

r = ULT(7)(11)

r.log()

const TRO = f => a => b => f(b)(a)

r = TRO(ULT)(7)(11)

r.log()


const ULT2 = a => b => TRO(PRI)(a)(b)

r = ULT2(7)(11)

r.log()

//boolean TRUE e FALSE
// exp ? PRI : ULT

const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro'
F.toString = () => 'Falso'

T.log()
F.log()

// NOT

const NOT = a => a(F)(T)

r = NOT(F)

r.log()


//AND

const AND = a => b => a(b)(F)


r = AND(T)(T)

r.log()


// OR

const OR = a => b => a(T)(b)

r = OR(F)(T)

r.log()