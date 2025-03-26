import {useState} from 'react'
import Rules from './hooks/Rules'
import RulesClass from './hooks/RulesClass'
import Hook1 from './hooks/Hook1'
import DarkTheme from './hooks/DarkTheme'
import TextResizer from './hooks/TextResizer'

const App = () => {
  const [dark,setDark]=useState(false)

  // function to handle light and dark mode 
  const handleTheme=()=>setDark(!dark)
  return (
    <div className={`${dark?"text-white bg-dark":"text-dark bg-light"} `}>
      {/* <Rules/> component call */}
      {/* <RulesClass/> */}
      {/* <Hook1/> */}
      {/* <DarkTheme dark={dark} handleTheme={handleTheme}/> */}
    <TextResizer/>

    </div>
  )
}

export default App
