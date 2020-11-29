import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, API_URL, IMG_URL } from "../config";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=5`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setMovies(movieData);
      })
      .catch((err) => {
        console.log("API couldn't be reached");
      });
  }, []);

  return (
    <React.Fragment>
      <h2>
        {" "}
        <Link to="/top"> Trending Movies</Link>{" "}
      </h2>
      <div class="movie-card reduce">
      {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/movie/${movie.id}`}>
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

export default Trending;
