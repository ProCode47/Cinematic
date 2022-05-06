import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMG_URL } from "../config";
import { Link } from "react-router-dom";
import axios from "axios";

const Explore = () => {
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [crime, setCrime] = useState([]);
  const [horror, setHorror] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [sciFi, setSciFi] = useState([]);

  useEffect(() => {
    // Action
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setAction(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });

    //Romance
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&page=2`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setRomance(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });

    //Comedy
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&page=3`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setComedy(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
    //Animation
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US&page=4`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setAnimation(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });

    //Crime
    axios
      .get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=80`)
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setCrime(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });

    // Horror
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&page=2`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setHorror(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });

    //Mystery
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US&page=2`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setMystery(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
    // Sci-Fi
    axios
      .get(
        `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US&page=3`
      )
      .then((res) => {
        const movieData = res.data.results.splice(0, 12);
        setSciFi(movieData);
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
  }, []);

  return (
    <React.Fragment>
      <h1 className="explore-header">
        <span className="im im-star"></span> Discover{" "}
        <span className="im im-star"></span>{" "}
      </h1>
      <h2>
        {" "}
        <Link to="/discover/28">Action</Link>{" "}
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {action.map((movie, index) => (
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

      <h2>
        {" "}
        <Link to="/discover/10749">Romance</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {romance.map((movie, index) => (
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
      <h2>
        {" "}
        <Link to="/discover/16">Animation</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {animation.map((movie, index) => (
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
      <h2>
        {" "}
        <Link to="/discover/35">Comedy</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {comedy.map((movie, index) => (
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
      <h2>
        {" "}
        <Link to="/discover/80">Crime</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {crime.map((movie, index) => (
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

      <h2>
        {" "}
        <Link to="/discover/27">Horror</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {horror.map((movie, index) => (
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
      <h2>
        {" "}
        <Link to="/discover/9648">Mystery</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {mystery.map((movie, index) => (
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
      <h2>
        {" "}
        <Link to="/discover/878">Science Fiction</Link>
        <i class="fa fa-arrow-right-long"></i>

      </h2>
      <div class="movie-cards">
      {sciFi.map((movie, index) => (
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

export default Explore;
