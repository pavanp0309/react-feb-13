import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { title, year, rating, genre, poster, director,id } = props.movies;
  return (
    <div className="card shadow border border-danger">
      <img src={poster} alt="" className="img-fluid" />
      <Link to={`/movies/${id}`}  className="nav-link">{/* passing dynamic movie id to the url */}
        
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">Year:{year}</p>
          <p className="card-text">Rating:{rating}</p>

          <button className="btn btn-success">book ticket</button>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
