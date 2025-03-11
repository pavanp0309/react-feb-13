
// different types of variables 
// var 
// let -es6(ecmascript)
// const -es6(ecmascript)


// declaration : creation of variables ,function class  
// eg: var a; function data(){}

// redeclaration :assigning the value to same twice (creating the varaible with the same in same scope )

// initialization : assigning a value to a varibale 
//  var a=10
// let a=20


// scope : lifetime of variable (upto whhere and when we access)
    //   different types of scope 
         // 🎯Global scope -we can everywhere
        //   local scope 
                //    🎯 block-scope -{}
                //    🎯function-scope-function data(){}
                //    🎯module-scope

// RULES 
// 🎯it shouldnt start with numbers and special charaters expect _ and $
// eg:var 8g //An identifier or keyword cannot immediately follow a numeric literal
//    var &8;
// it should contain any reserved keyword 
// var var //var' is not allowed as a variable declaration name
// var for   while function class 






// 1.DIFFERENCE B/W THE VARIABLE


// Declaration
var a;
let b;
// const d //ncaught SyntaxError: Missing initializer in const declaration
const c=10; 


// Re-declaration 
var re;
var re;
let re1
// let re1 //Uncaught SyntaxError: Identifier 're1' has already been declared
const re2=10
// const re2=10 //Uncaught SyntaxError: Identifier 're2' has already been declared


// block-scope
{
    let re1 //redeclared
    const re2=10 //redeclared
}



// scope 

// global scope
// var s=10
// let s1=10
// const s2=10
// console.log("gs",s)
// console.log("gs",s1)
// console.log("gs",s2)

// block-scope
// {
// var s=10
// let s1=10
// const s2=10
//     console.log("gbs",s)
//     console.log("gbs",s1)
//     console.log("gbs",s2)
// }
// console.log("bs",s)//var value-10
// // console.log("bs",s1)//let value-10 //Uncaught ReferenceError: s1 is not defined
// console.log("gbs",s2) //


// function scope 
// function Data(){
//     debugger
//     var s=10//function-scoped variable
// let s1=10
// const s2=10
//     console.log("gfs",s)
//     console.log("gfs",s1)
//     console.log("gfs",s2)
// }
// // calling the function
// Data()
// console.log("gfs",s)
// console.log("gfs",s1)
// var is function scoped
// let const is function scoped


// hoisting : moving all the Declaartion to Top of there scope 
// debugger
    console.log(as)//undefined

   export  var as=10
    let as2="bye"
    const as1=10
    console.log(as2)//refrence error
    console.log(as1)//refrence error

// What is Hoisting 
// what is TDZ 
// explain the Difference b/w var let and const 
