// import PropertyCard from "./components/PropertyCard"
// import DetailsCard from "./components/DetailsCard"
// import ExampleCard from "./components/ExampleCard"
// import { platDetails } from "./data/data"
// // 1.Unidirectional flow(parent to child)
// function App(){
//   return(
//     <>
//     {/* rendering child component */}
//     {/* props: properties passed through jsx attributes */}
//     {/* <PropertyCard d="hello"/> */}
//     {/* passing the children prop */}
//     {/* <PropertyCard  d="hello1">hello</PropertyCard> */}

//    {/* <DetailsCard example="s"/> */}
//  {/* {
//   platDetails.map((ele ,index)=>{
//     const {Dimensions:{length,breath},Plot_Area,img,location,owner,ownership,name}=ele

//     return <ExampleCard key={index}
//      length={length}
//       breath={breath}
//      area={Plot_Area} 
//      imgsrc={img} 
//      loc={location} 
//      owner={owner} 
//      ownership={ownership}
//      name={name}
//      />
//   })
//  } */}



  
//     </>
//   )
// }
// export default App


import React from 'react'

import Example2 from './components/Example2'

// rendering: jsx-jsx-element(html)->copyby virtual->uipadtes(props or state)-virtual compares with previous vesrions updates the ui(required)
// conditional rendering :
  // using if-else switchcase ,ternary operator  
  // using && 0r || opertor
const App = () => {
  let light=false

  return (
    <div>
      {light? <Example2 data={"rvi"}/>:""}
     
      <Example2 data={"r"}/>
      <Example2 data={"ravikumare"}/>
      <Example2 data={"ravikumare"}/>
    </div>
  )
}

export default App
