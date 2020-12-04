import React from "react";
import { IMG_URL } from "../config";

const Result = ({ search, name }) => {
  return (
    <React.Fragment>
      <h2>
        {" "}
        Search Results for{" "}
        <b>
          <i>{name}</i>
        </b>{" "}
      </h2>
      <div class="movie-card reduce">
        {search.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails/${movie.id}`}>
              {" "}
              <div className="dp">
                <img
                
                  src={`${IMG_URL}/w500${movie.poster_path}`}
                  alt={movie.title}
                />{" "}
              </div>
              <h4 className="reduce-font">{movie.title}</h4>{" "}
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Result;
