import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMG_URL } from "../config";
import { Link } from "react-router-dom";
import axios from "axios";

const TrendingShow = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=2`
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
        <Link to="/trending"> Trending </Link>{" "}
      </h2>
      <div class="movie-card reduce">
      {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/tv/${movie.id}`}>
              {" "}
              <div className="dp">
                <img
                
                  src={`${IMG_URL}/w500${movie.poster_path}`}
                  alt={movie.name}
                />{" "}
              </div>
              <h4 className="reduce-font">{movie.name}</h4>{" "}
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TrendingShow;
