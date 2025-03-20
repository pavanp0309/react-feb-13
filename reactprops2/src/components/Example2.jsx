import React from 'react'

const Example2 = (props) => {
    let validuser="trainer"
    // if(validuser)return "trainer dashbord"
    let data=[]
  return (
    <div>
      <h1> hello {props.data}</h1>
      <h1>{(validuser=="trainer")?"adminDashboard":null}</h1>
      <h1>{(validuser=="trainer")&&"adminDashboard"}</h1>
      <h1>{!!NaN&&"hello"}</h1>
      <h1>{NaN && "hello dev"}</h1>
      <h3>{"aa" || "hello"}</h3>
      <h3>{false || "hello"}</h3>
      <h1>{!data.length &&"no-data"}</h1>
    </div>
  )
}

export default Example2
