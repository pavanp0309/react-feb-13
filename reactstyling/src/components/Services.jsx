import "./services.css"// external css
import styles from "../components/services.module.css" //{/* module css type */}

const Services=()=>{
 let headerStyles={
    border:"2px solid blue",
    fontSize:"3rem"

 }

    return(
    <div style={{border:"2px solid red",padding:"2rem",backgroundColor:"gold"}}>{/* first way  */}
      <h1 style={headerStyles} >Services</h1>
      <p className="c1"></p>
      {/* module css type */}
      <p className={styles.c1}></p>
    </div>
    )
}
export default Services