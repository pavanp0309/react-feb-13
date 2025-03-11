// with js and without react 
// let card=document.createElement("div")
// let h1ele=document.createElement("h1")
// let cardbody=document.createElement("div")
// let buttonele=document.createElement("button")

// // assigned the classname to div section
// card.className="card"
// cardbody.className="card-body"
// buttonele.className="btn btn-success"

// // insert the content into h1 button
// h1ele.innerText="React-Series-1"
// buttonele.innerText="click"

// appending the childs to parent
// card.appendChild(h1ele)
// card.appendChild(cardbody)
// cardbody.appendChild(buttonele)

// document.body.appendChild(card)

// let ple=document.createElement("p") //main element node
// let text=document.createTextNode("sample")//children ele

// ple.appendChild(text)

// ple.setAttribute("id","id1")
//attributes --props --children

// sample:children props 
// id:prop 



{/* <p id="id1">sample</p> */}
// Creating With React 
// React-is used creating the logic and building the Ui 
// React-dom :it helps displaying the conentent /element in the browser
// const Pele=React.createElement("p",{id:"id1"},"sample")
// const Pele1=React.createElement("p",{id:"id2",className:"c1"},"sample")//class-className


// const Pele1=React.createElement("div",{id:"id2",className:"c1"},
//     React.createElement("h1",{id:"id2",className:"c1"},"hello"))
// console.log(Pele1)
// let root=document.getElementById("root")
// ReactDOM.createRoot(root).render(Pele1); 

{/* <h1 class="c1" target="_blank"></h1>
c1: props
target: props
hello-children
*/}

// These without jsx 
let H1ele=React.createElement("h1",{className:"c1",target:"_blank"},
    React.createElement("span",{},"hello"))
console.log(H1ele)
let root=document.getElementById("root")
ReactDOM.createRoot(root).render(H1ele)