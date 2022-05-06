import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, API_URL, IMG_URL } from "../config";
import axios from "axios";

const Latest = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setMovies(movieData);
      })
      .catch((err) => {
        console.log("the API could not be reached");
      });
  }, []);

  return (
    <React.Fragment>
      <h2>
        {" "}
        <Link to="/latest"> Popular Movies </Link>{" "}
      </h2>
      <div class="movie-cards">
      {movies.map((movie, index) => (
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

export default Latest;
