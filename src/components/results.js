import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { IMG_URL } from "../config";

const Result = ({ search, name }) => {
  const history = useHistory()
  useEffect(() => {
    if (!name) {
      history.push('/')
      ;
    }
  }, []);
  return (
    <React.Fragment>
      <h2>
        {" "}
        Search Results for{" "}
        <b>
          <i>{name}</i>
        </b>{" "}
      </h2>
      <div class="movie-cards">
      {search.map((movie, index) => (
          <div className="movie card-sm" key={index}>
            <div className="movie-img img-sm">
              <img
                src={`${IMG_URL}/w500${movie.poster_path}`}
                alt={movie.title}
              />{" "}
            </div>
            <div className="movie-info">
              <a href={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>{" "}
            </a>
            <hr/>
            <small><i class="fas fa-star"></i> {movie.vote_average} </small>
            </div>
          </div>
        ))}
      </div>
       
    </React.Fragment>
  );
};

export default Result;
