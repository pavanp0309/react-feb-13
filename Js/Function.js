// FUNCTIONS :REUSEABLE , performance ,readiability (write once use as many time we want)
// these basic builiding of Webapps
// example
function Card(name){
    document.write("Product: ",name,"<br>")
}
Card("apple")
Card("Iphone")
Card("powder")


// Different Types of Functions 
// 1.Named Function 
// 2.function Expression
// 3.anonomous function 
// 4. Arrow function
// 5.IFFE :IMMEDIATELY functiom expression  
// 6. constructor function ,higherOrder,  callback 


// named Function ---functional components
// function Component(){ // Parmaters,params,formal arguments
//     // excute the upto here
//  return
//  console.log("hell") // doest not excute
// }

// // calling the function
// Component()// actual arguments (values can be any datatype)

// Parmaters 
// Default Paramters
// Rest Parameters (...rest)


// function will excute On how they are called not on how they declaraed 
// function Component1(){
//     // function with empty return statement always returns undefined
//  return 
// }

// function Component2(){
//     // function without  return statement always returns undefined
    
// }



// var data=Component1()
// console.log(data)//undefined
// var data2=Component2()
// console.log(data2)//undefined


// function Add(a,b){
//   console.log(a+b)
//   return a+b
  
// }

// // const res=Add(1,2)
// // console.log(res)//3
// // console.log(res+3)//6 
// // console.log(res*3)//9

// // HIGHORDER FUNTIO SYNTAX 
// // function Example(a){
  
// //     return a()
    
// //   }
  
// // let r=Example(data)

// // function data(){console.log("hello")}
// // console.log(r)


// // PARAMETRS 

// function PropsCon(a,b,c){//parameters
//   console.log(a,b,c)
// }

// PropsCon(1,3,"hello")//arguments

// // before ES6
// function PropsCon(a,b,c){//parameters
//     if(b===undefined || c===undefined){
//         b=3
//         c="bye"
//     }
//     console.log(a,b*4,c)
//   }
  
//   PropsCon(1,)//arguments

// // DEfault Parameters 

// function PropsCon1(a,b=0,c="user"){//parameters
   
//     console.log(a,b*4,c)
//   }
  
//   PropsCon1(1)//with default values
//   PropsCon1(1,5,"m")//without default value


// Note: Uncaught SyntaxError: Rest parameter must be last formal parameter 
//   function PropsCon2(a,b=0,c="user",...t){//parameters
   
//     console.log(a,b*4,c)
//     // console.log(t.map(ele=>console.log(ele)))
//     for(let i=0;i<t.length;i++){
//         console.log(t[i])
//     }
//   }
  
// PropsCon2(1,3,4,56,7,8,9,0,3)

// this: keyword refers to current object based on the context it is called

// global scope 
// console.log(this) // window undefined


// function Exam(){
//     console.log(this) //window
// }
// Exam()


// // object
// let Person={
//     name:"ravi",
//     data:function (){
//         console.log(this) //person //document  
//     }
// }

// // callling the Method
// Person.data()

// call  apply bind 

// ARROW FUNCTION : It is syntatic sugar of normal function (coincise of writing named functions)
// Named Function syntax 
// function Data(a){
//     console.log("i am named function")
//     console.log(a)
//     console.log("hello")
// }

// Data()

// // ARROW FUNCTION 

// let Arr=()=>{ console.log("i am Arrow function")}

// // calling the function with variable name
// Arr()

// // deffrence
// // 1.arrow function doesnt require  function Name(identifier) & keyword 
// // 2.we call with variable name 
// // 3arrow function doesnt require paranthesis () when we pass single parameter
// // 3arrow function doesnt require  {} when we have single expression or stattement
// // 3arrow function  require  {} and () when we have multiple parameters and expression


// // eg:oesnt require paranthesis ()
// let Arr1=a=>console.log(a)
// Arr1(1)

// // eg:doesnt require  {} 
// let Arr2=a=>console.log(a)

// Arr2(1)


// // eg: require  {} and () when we have multiple parameters and expression
// let Arr3=(a,b)=>{
//     console.log(a)
//     console.log(b)
// }

// Arr2(1)
// 1.sinle expression 
// let example=(a,b)=>a+b // doesnt require return statement when we pass single expression (it has implicit return statement)
// let res1=example(10,4)
// console.log(res1)

// 1.sinle expression 
// let example1=(a,b)=>{
//     return a+b
// }// doesnt require return statement when we pass single expression (it has implicit return statement)
// let res2=example1(10,4)
// console.log(res2)


// let example2=(a,b)=>(a+b)// doesnt require return statement when we pass single expression (it has implicit return statement)
// let res3=example2(10,4)
// document.write(res3)


// Hoisting  : movie all declaration to top of there scope varibale declaration fucnction decalartion class decalartiom

// console.log(a) // undefined
// var a=10

// exampleHoi() //hello
// function exampleHoi(){
//    console.log("hello")
//    return
// }

// exampleHoi() 

// var a=()=>{console.log("hello")}
// console.log(a())

// Arrow function doest have its own these Binding 

// let Person={
//     // prop
//         name:"ravi",
//         // method
//         data: function(){
//             console.log(this.name) // current object
//         }
//     }
// console.log(Person.data())

// Higher Order function : eventlistener :addeventListener("click",()=>{})
//  setTimeout(() => {
    
// }, timeout);

// Map(ele=>ele)
// Map(function(ele){
//   return ele
// })
// debugger;
// console.log(a())//type error
// var a=()=>"hello"

// var a=(p=10,...rest)=>console.log(p,rest)
// console.log(a(1,33,4,5,5))


// function Add(){
//     console.log(arguments)
// }
// Add(2,4,5,6,6)


// var ad=()=>console.log(arguments)
// console.log(a(1,33,4,5,5))


// var a=function (){
//   console.log("ehllo")
//   return
// }
// var r=a()
// console.log(r)

// var a=10

// IFFE : 
// let res=(
//     function(){
//     console.log("hello")

//     var a=10
    
//     }
    
// )()





// console.log(a)

// callbacks : bom-setTime setInterval


// TernaryOpertor 
// OptionalChaining
// Nullesh collspan

// Linked post  
// difference b/w arrow function and named functions 