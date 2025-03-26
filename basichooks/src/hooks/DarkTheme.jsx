

const DarkTheme = ({dark,handleTheme}) => {


  return (
    <div className={`${dark?"text-white bg-dark":"text-dark bg-light"} `} style={{height:"500px"}}>
        <button 
        className={`${dark?"text-dark btn btn-light":"text-white btn btn-dark"}`}
        onClick={()=>handleTheme()}
        >
            {dark?"dark":"light"}
        </button>
    </div>
  )
}

export default DarkTheme
