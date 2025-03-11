// Array methods : 
// Basic Methods  
// shift 
// unshift 
// pop
// push 
// slice 
// splice 


// HigherOrder methods 
// map filter reduce forEach find finIndex some ,every 

// let a=[1,2,3,5,7]
// console.log(a.length)
// // console.log(a.pop()) // Removes the last element from an array and returns it
// // console.log(a.shift()) // Removes the first element from an array and returns it.
// console.log(a.push("🧽")) // Appends new elements to the end of an array, and returns the new length of the array.
// console.log(a)
// console.log(a.unshift("🧽")) // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(a)

// extracts the portion of the array 
// let a1=[1,2,3,5,7]
// console.log(a1)
// console.log(a1.length)
// // console.log(a1.slice()) // if no-value is given it removes untill end
// // console.log(a1.slice(2)) // if no-value is given it removes untill end
// // console.log(a1.slice(2,4)) 
// // console.log(a1.slice(-2,-4)) // startindex>endIndex ==>empty
// console.log(a1.slice(-4,-2)) // length+startindex => 5+(-4)=1 length+endindex=5+(-2)=3
// console.log(a1.slice(4,2)) // startindex>endIndex ==>empty



// console.log(a1.splice(index,nofremoved,addval))
// console.log(a1.splice(0))
// console.log(a1.splice(2,2,"hello"))
// console.log(a1)



// Higher Order methods :
let arr1=[1,2,3,4,5,6,7,8,9,10]
// let arr2=[1,2,3,4,5,6,7,8,9,10]
// let r=[];
// function Data(ele){
//     for(let i=0;i<ele.length;i++){
//         r.push(ele[i]*2)
      
//     }
//     return r
// }
// let res=Data(arr1)
// console.log(res)
// Data(arr2)



// arr1.map((ele,index,newarr)=>{}) //arrow fn syntax
// arr1.map(function(ele,index,newarr){})//anonomous fn syntax
// function Data(ele,index,newarr){}
// arr1.map(Data)//anonomous fn syntax

let arr3=[1,2,3,4,5,6,7,8,9,10]
// let res=arr3.map((ele)=>ele)
// let res=arr3.map((ele)=>(
//     ele
// ))
// let res1=arr3.map((ele)=>{
//    return  ele  // require return while using the {}
// })
// console.log(res)
// console.log(res1)

// let res3=arr3.map((ele,i)=>{
//     console.log("ele:",ele)
//     console.log("index:",i) //keys
//     return  ele*2 // require return while using the {}
//  })


//  let res4=arr3.filter((ele,i)=>{
//     console.log("ele:",ele)
//     console.log("index:",i) //keys
//     return  ele%2==0 // require return while using the {}
//  })

//  console.log(res3)

//  console.log(res3)

// let arr4=[1,2,3,4,5,6,7,8,9,10]
//  let res5=arr4.reduce((cur,next,i)=>{
//     console.log("prev:",cur)
//     console.log("next:",next) //keys
//     // console.log("index:",i) //keys
//     return  cur+next  // require return while using the {}
//  },0)

//  console.log(res5)

let arr5=[1,2,3,4,5,6,7,8,9,10]
// let res3=arr5.map((ele,i)=>{
//     console.log("ele:",ele)
//     console.log("index:",i) //keys
//     return  ele*2 // require return while using the {}
//  })
//  let res4=arr5.forEach((ele,i)=>{
//     console.log("ele:",ele)
//     console.log("index:",i) //keys // require return while using the {}
//  })

//  console.log(res3)
//  console.log(res4)


// let arr6=[1,2,3,4,5,6,7,8,9,10,"raju"]
// let r=arr6.find(ele=>ele=="raju")
// let r1=arr6.findIndex(ele=>ele=="raju")
// console.log(r)
// console.log(r1)

let arr7=[1,2,3,4,5,6,7,8,9,10]
console.log(arr7.sort((a,b)=>b-a))







