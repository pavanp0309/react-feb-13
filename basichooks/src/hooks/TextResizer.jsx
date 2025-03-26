import {useState} from 'react'

const TextResizer = () => {
    const [textResize,setTextResize]=useState(16)

    // function for handle fontsize 
    const handleIncreaseFontsize=()=>{
       
        setTextResize((prev)=>prev+2)
        setTextResize((prev)=>prev+2)
    }
    const handleDecreaseFontsize=()=>setTextResize(textResize-2)
    // const handleResetFontsize=()=>setTextResize(16)

  return (
    <div>
      <p>Fontsize:{textResize}</p>
      <p style={{fontSize:`${textResize}px`}}>hello I am react dev</p>
      <button className={`btn btn-success ${textResize>=50&&"disabled"}`} onClick={handleIncreaseFontsize}>Increase</button>
      <button className='btn btn-danger mx-2' onClick={()=>setTextResize(16)}>reset</button>
      <button className={`btn  btn-warning ${textResize<=10&&"disabled"}`} onClick={()=>handleDecreaseFontsize()}>decrease</button>

    </div>
  )
}

export default TextResizer
