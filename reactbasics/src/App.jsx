import React, { Component } from 'react'
import Navabar from './components/Navabar'
import Example from './components/Example'
// Functional Component
export default function App(){
  return(
    <>
    <Example/>
    <Navabar/>
    </>
  )
}


// class component

export  class DummyApp extends Component {
  render() {
    return (
      <div>
        class component
      </div>
    )
  }
}

