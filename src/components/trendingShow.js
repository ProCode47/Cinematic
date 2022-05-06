import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { API_KEY, API_URL, IMG_URL } from "../config";
import { Link } from "react-router-dom";
import axios from "axios";

const TrendingShow = () => {
  const [movies, setMovies] = useState([]);
  const [Page, setPage] = useState();
  const fetchMovies = (path) => {
    axios
      .get(path)
      .then((res) => {
        const movieData = res.data.results;
        setMovies([...movies, ...movieData]);
        setPage(res.data.page);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
  };
  const handleClick = () => {
    const endpoint = `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=${
      Page + 1
    }`;
    fetchMovies(endpoint);
  };
  useEffect(() => {
    axios
      .get(
        `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=2`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setMovies(movieData);
        setPage(res.data.page);
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
      <InfiniteScroll
        dataLength={movies.length}
        next={handleClick}
        hasMore={true}
        className="movie-cards"
      >
         {movies.map((movie, index) => (
          <div className="movie card-sm" key={index}>
            <div className="movie-img img-sm">
              <img
                src={`${IMG_URL}/w500${movie.poster_path}`}
                alt={movie.name}
              />{" "}
            </div>
            <div className="movie-info">
              <a href={`/tv/${movie.id}`}>
                <h3>{movie.name}</h3>{" "}
            </a>
            <hr/>
            <small><i class="fas fa-star"></i> {movie.vote_average} </small>
            </div>
          </div>
        ))}
      </InfiniteScroll>
      <h4 className="infinite-load">Loading...</h4>
    </React.Fragment>
  );
};

export default TrendingShow;
