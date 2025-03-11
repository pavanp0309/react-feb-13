// ARRAYS : It collects Different types of Datatypes Under single variable Name 

// USEAGE:  
// Cart ,banking-application-user-details
// Cookies&Sessions -authentication 
// Search filters 
// api data -display dynamic content  
// list todo values=[{id:1,todo:""}]
// storing the Form-Data - register ,contact ,Ticket-booking , signin 


// Different Ways To create Arrays   [type of array-is object] 
// 1.using the Array literals =[]
// 2.using the New Keyword 
// 2.using the ARRAY GLOBAL KEYWORD 


// using the Array literals 
// let users=[1,3,4,"raju","ramu",false,{place:"jntu"},null]

// Different ways to access the Array values (methods)
// 1.arrayName[indexvalues]
// 2.loops 


// 3.Methods 
//  Basic-Methods 
//   shift ,unShift ,pop ,push ,toString() ,join() ,splice ,slice ,reverse indexOf ,lastIndexOf 
//   ADvanced Methods :
//  map filter reduce ,foreach sort ,find finIndex some every etc..

// let users=[1,3,4,"raju","ramu",false,{place:"jntu"},null]

//  console.log(typeof users)
//  console.log(users[0])//1
// console.log(users[4])//ramu
// console.log(users[users.length-1])//null

// const Data=["raju","ramu","rani"]

// // console.log(Data[0])

// // array destructuring  : order is important
// const [da,g,k]=Data
// // console.log(da)
// // console.log(g)
// // console.log(k)

// // Skiping the Values 
// const [s1,,s2]=Data
// console.log(s1)//raju
// console.log(s2)//rani


// // Default values 
// let Def=["raju","user","admin"]
// const [r,u,t="Guest"]=Def
// console.log(t)//admin

// let Def1=["raju","user",]
// const [rr,ur,t1="Guest"]=Def1
// console.log(t1)//Guest


// // Nested ARRAY Destrcuturing 
// let Def2=[["raju","user"],["ramu","admin"]]
// const [[m,n],[m1,n1]]=Def2
// console.log(m,n)
// console.log(m1,n1)


// without Destructuring with Functions 
// function Example(a){//parameters -default/rest
//  console.log(a)
// }

// Example([1,3,4])


// // with Destructuring with Functions 
// function Example1(a){//parameters -default/rest
//     const [n1,n2,n3]=a
//     console.log(n1,n2,n3)
//    }
   
// Example1([1,3,4])

// function Example1([n1,n2,n3]){//parameters -default/rest
//     console.log(n1,n2,n3)
//    }
   
// Example1([1,3,4])


// // Using the Rest Operator 
// let Exam=[1,3,4,6]
// const [a,...r]=Exam //Rest Operator // access the Remaining values
// console.log(a)
// console.log(r)

// const d=[...Exam,10,3,5,65,...Exam] // copies the Entire Array imnto new array
// console.log(d)


// Combination of Using Both ARRAY and Object Destructuring 

const AB=[{name:"raju",age:24,ad:"hybd"},1,3,4]

const [{name:n="raju",...r1},d1,...y]=AB
console.log(n)
console.log(r1)
console.log(d1,y)