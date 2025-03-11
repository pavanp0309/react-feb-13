// Modules
// import : to use the ConvolverNode(recieving )
    //  named Import :with same Name we use 
    //  default Import ::with any  Name we use 
// export : to share the Code

// Named Export 
// default export : we should have only one default export for a file 


// examples 
// Named import 
// import {example,Data,} from "./destructuring.js"
// import { Data } from "./destructuring.js"
// // import { ex1,ex2 } from "./destructuring.js"
// import { Card} from "./destructuring.js"
// import { as } from "./variables.js"
// console.log(example)
// console.log(Data,as)
// // console.log(ex1)
// // console.log(ex2,Data)
// // using the Function
// console.log(Card({name:"vishwas"}))
// console.log(Card({name:"balu"}))
// console.log(Card({name:"rakes"}))


// // default import 
// import u,{Card }from "./destructuring.js"
// console.log(u)

// importing as object
// import * as m from "./destructuring.js"
// console.log(m.Card({name:"raju"}))
// console.log(m.example)
// console.log(m.Data)

// aliasing
import { example as a,Data as d, Data} from "./destructuring.js";
console.log(a)
console.log(d)

import { r } from "./sample/sampleDoubt.js";
console.log(r)