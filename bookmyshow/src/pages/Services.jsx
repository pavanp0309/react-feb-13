import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// nested Routing 
const Services = () => {
  return (
    
    <div className="d-flex justify-content-center my-4">
      <ul className="nav nav-pills">
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
