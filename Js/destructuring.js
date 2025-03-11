// Destructuring-Props&state 

// Different way to create an Object 
// 1.using object-literals ={}
// 2.using object.create
// 3.using function constructors
// 4.using class
// 5.using new keyword 

// object-literals={}
// object : key and value Pairs 
// let Person={
//     name:"raju",
//     age:24,
//     dob:23-9-1994,
//     // nested
//     addresss:{
//         city:'hyderabad',
//         pincode:5437652
//     },
//     // method
//     alldetails:function(){console.log("hello am raju")}
// }

// different methods to access the Object Values 
// 1.dot notation
// 2.array notation
// 3.using the Loops
// 4.Object.keys
// 5.Object.values
// 6.Object.entries

// 1.
// console.log(Person)
// console.log(Person.name)
// console.log(Person.age)
// console.log(Person.alldetails())//calling the method
// console.log(Person.addresss.city)

// 2.
// console.log(Person['name'])

// 3.
// let res=Object.entries(Person)
// console.log(res)

// for (const key in Person) {
//     console.log(Person[key])
// }

// let Person1={
//     name:"raju",
//     age:24,
//     dob:23-9-1994,
//     pincode:10000,
//     // nested
//     addresss:{
//         city:'hyderabad',
       
       
//     },
//     // method
//     alldetails:function(){console.log("hello am raju")}
// }


// // syntax : object-destructuring 
// // const {properties}=objectName :-> const {properties}=Person

// const {name,dob}=Person;
// console.log(name)

// // global declaration
// ({name,dob}=Person)

// // nested object destructuring
// const {addresss:{city}}=Person
// console.log(city)

// // aliasing 
// const {addresss:{city:c}}=Person
// console.log(c)

// // Default values 
// const {pincode=10}=Person1;
// console.log(pincode) // 

// Spread & rest Operators ...rest ...spread

// let data={
//     name:"Iphone",
//     price:10000,
//     ram:"6gb"
// }

// rest operator 
// const {name:n,...a}=data
// console.log(n)
// console.log(a)

// spread operator 
// const a={...Person,name:"hello",...Person} 
// console.log(a)

//parameters
// 1.Default parameters 
// 2.Rest Parameters

// without distructring the Values
// function Card(a){//parameters,params ,formal argumnets
//     console.log(a)
//     document.write("Name:",a.name ,"<Br>")
//     document.write("city:",a.addresss.city ,"<Br>")
//     document.write("age:","<Br>")
//     document.write("Dob:","<Br>")
//     document.write("skills:","<Br>")
// }
// Card({name:"ramu",age:24,dob:1997,skills:["html","css","js"],addresss:{city:"goa"}})// argumnets -actual arguments


// function Card1({name,addresss:{city},...t}){//parameters,params ,formal argumnets
//  console.log(t)
//     document.write("Name:",name ,"<Br>")
//     document.write("city:",city ,"<Br>")
//     document.write("age:","<Br>")
//     document.write("Dob:","<Br>")
//     document.write("skills:","<Br>")
// }
// Card1({name:"ramu",age:24,dob:1997,skills:["html","css","js"],addresss:{city:"goa"}})// argumnets -actual arguments


// function Card2(a){//parameters,params ,formal argumnets
//      const {name,skills}=a
//     document.write("Name:",name ,"<Br>")
//     document.write("city:",a.addresss.city ,"<Br>")
//     document.write("age:","<Br>")
//     document.write("Dob:","<Br>")
//     document.write("skills:",skills.map(ele=>ele),"<Br>")
// }
// Card2({name:"ramu",age:24,dob:1997,skills:["html","css","js"],addresss:{city:"goa"}})// argumnets -actual arguments


// function Data(...r){
//  console.log(r)
// }
// Data(1,3,4,5,{name:"raju"})


import { as } from "./variables.js";
// named Export
export var example=as;
export let Data="ravi"
let ex1="raju"
let ex2="raju"
// second way
// export {ex1,ex2} 
export  function Card({name}) {
    console.log("welcome",name,ex1)
 }


 let def="default export😎😍🤗😏" 
 export let def1="default export😎😍🤗😏" 
 export default def
//  export default def1 //A module cannot have multiple default exports.


