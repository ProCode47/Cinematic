import React from "react";
import { IMG_URL } from "../config";

const Result = ({ search, name }) => {
  return (
    <React.Fragment>
      <h2>
        {" "}
        Search Results for{" "}
        <b>
          <code>{name}</code>
        </b>{" "}
      </h2>
      <div class="movie-card">
        {search.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/movie/${movie.id}`}>
              {" "}
              <div className="dp">
                <img
                  src={`${IMG_URL}/w500${movie.poster_path}`}
                  alt="cinematic"
                />{" "}
              </div>
              <h4>{movie.title}</h4>{" "}
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Result;
