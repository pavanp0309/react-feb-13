import React from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../api/Data";

const Home = () => {
  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={''}>
           ALL Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={''}>
            Electronics
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={''}>
            Jewellary
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">
            Mens Clothing
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">
            women'sMens Clothing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
