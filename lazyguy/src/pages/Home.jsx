import React from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { ProductData } from "../api/Data";
import Products from "./Products";

const Home = () => {
  const location=useLocation() // its is used for destructuring the url
  console.log(location)//{pathname: '/', search: '', hash: '', state: null, key: '5w1qe651'}
const navigate=useNavigate() // programmatic Navigation 

  let queryparams=new URLSearchParams(location.search)
  console.log(queryparams)
  let category=queryparams.get("category")
  let sort=queryparams.get("sort")

  let filterData=ProductData.filter((prod)=>category?prod?.category===category:true)
  if(sort=="asc"){
    filterData.sort((a,b)=>a.price-b.price)
  }else if(sort=="des"){
    filterData.sort((a,b)=>b.price-a.price)
  }


  // function for Handling the Fileters
  function handleFilter(key,value){
    if(value){
      queryparams.set(key ,value)
    }else{
      queryparams.delete(key,value)
    }
    navigate(`?${queryparams.toString()}`)
  }



  return (
    <>
    <div className="container my-3 d-flex justify-content-between">
      <ul className="nav nav-pills">
        <li className="nav-item">
         <button className="btn btn-outiline-success" onClick={()=>handleFilter()}>AllProducts</button>
        </li>
        <li className="nav-item">
        <li className="nav-item">
         <button className="btn btn-outiline-success" onClick={()=>handleFilter("category","men's clothing")}>MensClothing</button>
        </li>
        </li>
        <li className="nav-item">
        <button className="btn btn-outiline-success" onClick={()=>handleFilter("category","jewelery")}>MensClothing</button>
        </li>
        <li className="nav-item">
        <button className="btn btn-outiline-success" onClick={()=>handleFilter("category","women's clothing")}>WomensClothing</button>
        </li>
        <li className="nav-item">
        <button className="btn btn-outiline-success" onClick={()=>handleFilter("category","electronics")}>electronics</button>
        </li>
      </ul>
     {/* sorting */}
    <div className="sorting-buttons">
    <button className="btn btn-success" onClick={()=>handleFilter("sort","asc")}>LowtoHigh</button>
    <button className="btn btn-danger" onClick={()=>handleFilter("sort","des")}>HightoLow</button>
    </div>

    </div>

    {/* displaying the Products */} 
    <div className="container products">
      <div className="row gy-2">
        {
          filterData.map((prod)=>(
            <div className="col-sm-12 col-md-3 col-lg-3">
             <Products  product={prod} key={prod.id}/>
            </div>
          ))
        }
      </div>
    </div>

    </>
  );
};

export default Home;
