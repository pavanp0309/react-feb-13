// event: action : cliking a button ,scrolling the page ,opening pup rezing the browser typing in the keyword 
//  Types events 
    // mouseEvents : onclick,ondblclick,onmousedown,onmouseleave,onmousemove,onmouseenter etc .. 
    // KeyboardEvent : onkeydown,onkeyup,onkeypress etc .. 
    // formevents : onsubmit,onchange,onfocus,onblur ,oncancel etc .. 
    // BrowserEvents :onscroll,onresize,documentContentload ,onload etc .. 


// eventHandlers : are js function which excutes the piece of code when an event is triggred;
// EventListeners : it also a js function which listents to particular event occured on an element and calls the respected event handlers
// e:event-eventobject: which gives info of partcular event


// different ways to attach events to html elements

// 1.directly attaching to html elements
// 2.directly attaching to dom attributes  
// 3.through addEventListener  

// event handler 
function data(e){
    console.log("welcome user")
    console.log(e)//event-object //synthentic events
    console.log(e)//event-object //synthentic events
}

// 2 way :attaching to dom attributes 
let btnele=document.querySelector("#id1")
btnele.onclick=function(event){
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.innerText)
    console.log(event.target.parentElement.parentElement)
}
btnele.onclick=function(event){
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.innerText)
    console.log(event.target)
}

// 3.addEventListener 
let btnele1=document.querySelector("#id2")
btnele1.addEventListener("click",(e)=>{
    console.log(e)
})
btnele1.addEventListener("click",(e)=>{
    console.log(e.target)
})


// Interview 

// eventPropagation 

let pele=document.querySelector(".parent")
let childele=document.querySelector(".child")
let btnele12=document.querySelector(".btn-1")
let btnele2=document.querySelector(".btn-2")
let delg=document.querySelector(".delegat")

// window.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     e.stopImmediatePropagation()
//     console.log("window ele")
// },{capture:true})
// window.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("window ele")
// },{capture:true})
// pele.addEventListener("click",()=>{
//     console.log("parent ele")
// },{capture:true})
// childele.addEventListener("click",()=>{
//     console.log("child ele")
// },true)
// btnele12.addEventListener("click",()=>{
//     console.log("btn ele")
// })
// btnele2.addEventListener("click",()=>{
//     console.log("btn ele-1")
// })

delg.addEventListener("click",(e)=>{
  console.log(e.target.classList.toggle("c1"))
})


// 1.what are events 
// 2.types of events in js 
// 3.ways to attach events 
// 4.what is event propagation 
// 5.what is event delagation
// 6.what is event object
// 7.what is event target
