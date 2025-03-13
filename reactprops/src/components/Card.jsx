
// child component
function Card(props){
    console.log(props) //{title: 'BMW', price: 700000, offer: true}
//    doubt:
// props.title="ggggg" //Uncaught TypeError: Cannot assign to read only property 'title' of object '#<Object>'

    // 1stway
    // console.log(props.title)
    // console.log(props.price)
    // console.log(props.offer)
   
    // 2nd way  distructuring
    const {title,src='' ,price,offer,className ,variants=[]}=props
   
    console.log(variants)

    
    return(
        <>
        <div className={`${className} card border ${offer?"border-danger shadow my-3 rounded-5":""}`}  width={"150px"}>
          <img src={src} alt=""  width={"100px"} height={"100px"} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{price+10}onwards</p>
            <p>{variants.map(ele=>ele)}</p>
            <p className="card-text">Avg. Ex-Showroom price</p>
          </div>
        </div>
        </>
    )
}

export default Card