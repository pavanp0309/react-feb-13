import Card from "./components/Card"
// parent component
function App(){
  return(
    <>
    <h1 className="bg-warning text-center text-danger fw-bold p-3">Props_React</h1>
  {/* calling the Child */}
     <Card src="./src/assets/m.webp" title="BMW" price={"uu"} offer={true} className="bg-danger" variants={["v1","v2","v3"]}/>
     <Card title="bench" price={400000} offer={false} variants={["v1","v2","v3"]}/>
     <Card title="audi" price={600000} offer={false} className="bg-danger" />
     <Card title="tata" price={50000} offer={true} className="bg-warning"/>
     <Card title="nano" price={10000} offer={false} className="bg-info"/>
     
    </>
  )
}

export default App