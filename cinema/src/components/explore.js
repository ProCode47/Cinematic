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
      </h2>
      <div class="movie-card reduce">
        {action.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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

      <h2>
        {" "}
        <Link to="/discover/10749">Romance</Link>
      </h2>
      <div class="movie-card reduce">
        {romance.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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
      <h2>
        {" "}
        <Link to="/discover/16">Animation</Link>
      </h2>
      <div class="movie-card reduce">
        {animation.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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
      <h2>
        {" "}
        <Link to="/discover/35">Comedy</Link>
      </h2>
      <div class="movie-card reduce">
        {comedy.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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
      <h2>
        {" "}
        <Link to="/discover/80">Crime</Link>
      </h2>
      <div class="movie-card reduce">
        {crime.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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

      <h2>
        {" "}
        <Link to="/discover/27">Horror</Link>
      </h2>
      <div class="movie-card reduce">
        {horror.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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
      <h2>
        {" "}
        <Link to="/discover/9648">Mystery</Link>
      </h2>
      <div class="movie-card reduce">
        {mystery.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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
      <h2>
        {" "}
        <Link to="/discover/878">Science Fiction</Link>
      </h2>
      <div class="movie-card reduce">
        {sciFi.map((movie, index) => (
          <div className="movie" key={index}>
            <a href={`/moviedetails?id=${movie.id}`}>
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

export default Explore;
