import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// nested Routing 
const Services = () => {
  return (
    
    <div className="">
      <ul className="nav nav-pills my-3">
        <li className="nav-item">
          <Link className="nav-link active" to={"/services/movie"}>
            
            BookMovie
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/services/table"}>
          BookTable
          </Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default Services;
