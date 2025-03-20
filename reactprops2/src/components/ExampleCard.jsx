import React from 'react'
import PropTypes from 'prop-types'


const ExampleCard = (props) => {
     const { length,breath,area,imgsrc,loc,owner,ownership,name}=props
  return (
    <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imgsrc} className="img-fluid rounded-start" alt="..."/>
      <p className='card-text'>Owner:{owner}</p>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="row ">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 border border-success">
              <p>Plot Area</p>
              <p>{area}sqft</p>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 border border-success">
               <p>Dimensions</p>
               <p>{length }* {breath}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 border border-success">
           <p>Ownership</p>
           <p>{ownership}</p>
            </div>
            
        </div>
      </div>
    </div>
  </div>
</div>
  )
}


// default Props
// ExampleCard.defaultProps={
//     area:1000
// }

ExampleCard.propTypes={
 area:PropTypes.number.isRequired
    
}
export default ExampleCard
