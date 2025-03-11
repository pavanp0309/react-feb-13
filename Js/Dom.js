// Different types of methods to access the Html elements 
// 1.getElementByID
// 2.getElementsByClassName
// 3.getElementsByTagName
// 4.querySelector --->Jquery
// 5.querySelectorALL--->Jquery
// let aElement=document.getElementById("id2")
// console.log(aElement) //Id element : it return only first elemnt that matches in the Dom

// aElement.style.backgroundColor="red"
// aElement.style.display="block"


// add an attribute the Tag 
// aElement.setAttribute("target","_blank")
// console.log(aElement.hasAttribute("class")) // returns true or false values
// console.log(aElement.getAttribute("class")) // if attribute is not attached it returns null
// console.log(aElement.getAttribute("href")) // ./doc.txt

// className
// class
// function ModelBox(){
//     // aElement.className="c1"
//     // aElement.classList.add("c1")
//     aElement.classList.toggle("c1")
//     aElement.removeAttribute("href")
    
    
    
// }

// function ModelBox1(){
//     // aElement.className="c1"
//     // aElement.classList.remove("c1")
    
    
// }

// let Cl=document.getElementsByClassName("c1")// returns html collection values
// console.log(Cl)// htmlCollection -array of Html values
// Cl[0].style.backgroundColor="red"  //Yes- No-

// for(let i=0;i<Cl.length;i++){
//     Cl[i].style.backgroundColor="red"
// }


let C2=document.getElementsByTagName("h1") // returns html collection values
console.log(C2)// htmlCollection -array of Html values
// C2[0].style.backgroundColor="red"  //Yes- No-

// for(let i=0;i<C2.length;i++){
//     C2[i].style.backgroundColor="red"
// }



// // QuerySelector 
// // let data=document.querySelector(".c1")
// // console.log(data.style.color="red")//
// let data1=document.querySelectorAll(".c1 , a ,button")
// console.log(data1)
// console.log(data1[0].style.color="red")//

// //  for(let i=0;i<data1.length;i++){
// //         data1[i].style.backgroundColor="red"
// //     }
// data1.forEach((ele)=>ele.style.color="red")


// let card=document.createElement("div")
// let imgele=document.createElement("img")
// let cardbody=document.createElement("div")
// let h1Ele=document.createElement("h1")
// let btnEle=document.createElement("button")
// createElement("typeofelement",{attributes},"content")
// // step1 
// document.body.appendChild(card)
// card.appendChild(imgele)
// card.appendChild(cardbody)
// cardbody.appendChild(h1Ele)
// cardbody.appendChild(btnEle)

// // step1:2 adding the attributes 
// card.className="card"
// imgele.className="card-img-top"
// imgele.setAttribute("src","www.html")
// imgele.setAttribute("alt","no-img")
// cardbody.className="card-body"
// h1Ele.className="card-title"
// btnEle.className="btn"


// // step3: creating the TextNode 
// let Titletxt=document.createTextNode("iphone")
// h1Ele.appendChild(Titletxt)
// // h1Ele.append("hello")
// btnEle.innerText="<h1>Id element</h1>"
// btnEle.innerHTML="<h1>Id element</h1>"
// btnEle.innerHTML="addtocart"


// // step4 :apply the style
// card.style.border="2px solid red"

// Step5: Travesing of the dome
// parent |child |sibiling 
// console.log(document.body.parentElement.parentElement)
// console.log(document.body.parentElement.parentNode)
// console.log(document.body.children) //it returns only html elements
// console.log(document.body.childNodes) //it considers as text node comment Node etc

// #elementNode
// #textNode
// #commentNode
// #RootNode

// Dom Traversing 
let child=document.querySelector("#traverse")
//🎯 parent elements traversing
// console.log(child.parentElement.parentElement.parentElement.parentElement)
// console.log(child.parentNode.parentNode.parentNode.parentNode.parentNode)
// 🎯sibiling:
// console.log(child.previousSibling.previousSibling)
// console.log(child.previousElementSibling) //li
// console.log(child.nextSibling)//text
// console.log(child.nextSibling.nextSibling)//li-4
// console.log(child.nextElementSibling)//li-4

let ParentEle=document.querySelector("#parentele")
//🎯 child elements traversing
console.log(ParentEle.children) //reterives onlyHTMLCollection(5) [li, li, li#traverse, li, li, traverse: li#traverse]
console.log(ParentEle.childNodes) //reterives onlyNodeList(13) [text, li, text, li, text, comment, text, li#traverse, text, li, text, li, text]
console.log(ParentEle.childElementCount) //reterives onlyNodeList(13) [text, li, text, li, text, comment, text, li#traverse, text, li, text, li, text]
console.log(ParentEle.firstChild) //txt
console.log(ParentEle.firstElementChild) //li
console.log(ParentEle.lastChild) //txt
console.log(ParentEle.lastElementChild) //txt


// creating an element
let inputval=document.querySelector("#userInput")
let btnele=document.querySelector("#btn")
console.log(btnele)
// 1st way 
function Todo(){
 let liele=document.createElement("li")
 liele.innerText=inputval.value
 console.log(liele)
//  ParentEle.append(liele) //last
//  ParentEle.prepend(liele)//first
// ParentEle.insertAdjacentHTML("afterbegin","abgin")
// ParentEle.insertAdjacentHTML("beforebegin","bbegin")
// ParentEle.insertAdjacentHTML("beforeend","bend")
// ParentEle.insertAdjacentHTML("afterend","aend")
// ParentEle.insertBefore(liele,ParentEle.firstElementChild.nextElementSibling)
// console.log(ParentEle.firstElementChild.nextElementSibling)
// console.log(ParentEle.lastElementChild.previousElementSibling)
// ParentEle.insertBefore(liele,ParentEle.lastElementChild.previousElementSibling)

}
// 2.attaching dom property/object
// btnele.onclick=Todo

// 3.adding evenlinstener
btnele.addEventListener("click",Todo)
 

// let rootele=document.createDocumentFragment()
// console.log(rootele)
