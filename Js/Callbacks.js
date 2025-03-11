// js is synchronous and single threaded langugage
//  1.line by line

// console.log("hello- i am starting")
// function friend(){
//     for(let i=0;i<100;i++){
//         console.log("i am also coming")
//     }
// // }

// // console.log("both reached the location")

// // debugger
// // console.log("hello- i am starting")
// // function friend(){
// //     setTimeout(()=>{
// //         console.log("i am also coming")
// //     })
// // }
// // friend()
// // console.log("both reached the location")

// // callbacks can be performed in Two ways
// // synchronous and asynchronous
// // callbacks : one function passed an argument to another function and excuted after the first excuted

// // function Greet(a,b){// parameters
// //     console.log("hello",a,"pay",b)
// //   return
// // }
// // Greet("ravi",30)// arguments

// // function Greet1(a,b){// parameters

// //     b(a)//argument
// //   return
// // }
// // Greet1("ravi",function(a){ console.log(a)})// arguments

// // function step1(name,callback){
// // if(name==""){
// //     callback("error in username")
// // }else{
// //     callback("logged successfully")
// // }
// // }
// // function step2(data){
// //     console.log(data)

// // }

// // step1("",step2)
// // step1("ravi",step2)

// //    setTimeout(() => {
// //      console.log("choose an item")
// //      setTimeout(() => {
// //         console.log("added the Items to cart")
// //         setTimeout(() => {
// //             console.log("make the payment")
// //             setTimeout(()=>{
// //                 console.log("order been cooked")
// //                 setTimeout(()=>{
// //                     console.log("order-been placed")
// //                 })
// //             },3000)
// //         }, 4000);
// //      }, 5000);
// //    }, 6000);

// // function browse(){
// // setTimeout(()=>{
// //     console.log("browsing")
// // })
// // }

// // browse()

// function step1(a){
//     setTimeout(()=>{

//         console.log("hello-1",)
//         a()
//     },5000)
// }
// function step2(b){
//     setTimeout(()=>{
//         console.log("welcome-2",)
//         b()
//     },1000)
// }
// function step3(c){
//     setTimeout(()=>{
//         console.log("hello-3",)
//         c()
//     },4000)
// }
// function step4(d){
//     setTimeout(()=>{
//         console.log("hello-4",)
//         d()
//     },2000)
// }
// function step5(e){
//     setTimeout(()=>{
//         console.log("end",)
//         e()
//     })
// }
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4(()=>{
//                 step5(()=>{
//                     step5(()=>{
//                         step5(()=>{
//                             step5(()=>{
//                                 step5(()=>{
//                                     step5(()=>{
//                                         step5(()=>{

//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// function Prom(calback){
//   console.log("prom")
//   calback()
// }

// function cal(data){
//     console.log(data)
//     if(data=="hello"){
//         resolvedata()
//     }else{
//         rejectdata()
//     }
// }

// function resolvedata(){
//     console.log("success")
// }
// function rejectdata(){
//     console.log("reject")
// }
// Prom(()=>{
//     cal("" ,resolvedata, rejectdata)
// })

// Problem with Callback
// Callback hell : the pyramide doom structure of nested callbacks
// no-clear code ,perfomance

// Promises :
//    Pending state
//    Fullfilled state
//    rejected state

// syntax
// let p1 = new Promise((res, rej) => {
//     let status = 200;
//     if (status === 200) {
//       res(3);
//     }else{
//       rej("🎀")
//     }
//   });
// // case:1 as soon as we create a promise object it will be in pending state

// // state:pending
// // result:undefined

// console.log(p1);

// case:2: when promises is resolved that will be fulfilled state
// state:fulfilled
// result : value returned by resolved function

// case3: the Resolved value is accessed by the then methdo
// p1.then((a) => a + 10)
//   .then((b)=>b+3)
//   .then((data)=>console.log(data))
//   .catch(err=>console.log(err))
  
console.log("start")
setTimeout(() => {
    console.log("setTimeOut") //macrotask
}, 0);
let pr=new Promise((resolve, reject) => {
    resolve("promise")
    console.log("promise") //microtask higher importance
})
console.log("end")