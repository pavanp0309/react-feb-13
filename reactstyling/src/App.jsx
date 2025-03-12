import Home from "./components/Home"
import { FooterComponent } from "./components/Home"


// arrow function syntax for creating the component
const App=()=>{
  return(
    <div> {/* all jsx elements or expression must wrapped under single parent */}
      <h1>React-Styling</h1>
      <Home/>
      <FooterComponent/>
    </div>
  )
}

export default App