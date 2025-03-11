let p1=new Promise((resolve, reject) => {resolve(1)})
let p2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise2")
    },1000)
})
let p3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise2")
    },2000)
})

// it returns array of values as single output if all promises are resolved
// Promise.all([p1,p2,p3]).then((data)=>console.log(data))


// let p4=new Promise((resolve, reject) => {resolve(1)})
// let p5=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("promise2")
//     },1000)
// })
// let p6=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("promise2")
//     },2000)
// })



// // it returns array of values with status of the Promsis even when rejected 
// // Promise.allSettled([p4,p5,p6]).then((data)=>console.log(data))

// // output
// // 3) [{…}, {…}, {…}]0: {status: 'fulfilled', value: 1}1: {status: 'rejected', reason: 'promise2'}2: {status: 'fulfilled', value: 'promise2'}length: 3[[Prototype]]: Array(0)


// let p7=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(4)
// },3000)
// })
// let p8=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("promise2-rejected")
//     },1000)
// })
// let p9=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("promise2")
//     },1000)
// })


// Promise.race([p7,p8,p9]).then((data)=>console.log(data))

// output
// rejeceted value
// index.html:1 Uncaught (in promise) promise2-rejected


// let A1=new Promise((_, reject) => { setTimeout(()=>{
//   reject("error")
// },2000)  
// })
// let A2=new Promise((_, reject) => { reject("error-1")  })
// let A3=new Promise((resolve, reject) => { resolve("data")  })

// Promise.any([A1,A2,A3]).then((data)=>console.log(data))

// synchronous: blocks the excutions (line by line) 
// asynchronous: non-block excutions (fast come first served )

// async 
// let a=await fetch("")
// console.log(a)
// console.log("start")
//  async function Data(){
//    try {
    
//    } catch (error) {
    
//    }
//  }
// let res=Data()
// console.log(res)
// res.then(da=>console.log(da))
// console.log("end")

// Different types of Errors
// syntax error 
// ReferenceError
// TypeError

// console.log("start")
// try {
//     console.log(a())
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
// }
// console.log("end")

// async function Practice(params) {
//     let a=fetch(".")
// }
async function FetchData(url) {
 try {
    let a1=  fetch(url)
    a1.then((res)=>res.json())
     .then(data=>{
        console.log("dummydata",data.products)
        return  data.products.map(ele=>document.write(ele.title ,"<br/>"))
     })
    
    let a= fetch(url)
    a.then((res)=>res.json())
     .then(data=>{
        console.log("fake-data",data)
        return  data.map(ele=>document.write(ele.price ,"<br/>"))
     })
 } catch (error) {
    console.log(error.name)
 }
}
//  data.map(ele=>document.write(ele.title ,"<br/>")
FetchData("https://fakestoreapi.com/products")
console.log("end")
