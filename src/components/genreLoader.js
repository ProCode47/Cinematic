import React, { useEffect,useState } from "react";
import { API_KEY, API_URL, IMG_URL } from "../config";
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "axios";

const LoadMore = (props) => {
    const [Movie, setMovie] = useState([]);
    const [Page, setPage] = useState();
  const genre = props.match.params.genre;
 
  const fetchMovies = (path) => {
    axios
      .get(path)
      .then((res) => {
        const movieData = res.data.results;
        setMovie([...Movie,...movieData]);
          setPage(res.data.page)
         
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
    };
     const handleClick = () => {
        const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${Page + 1}`
        fetchMovies(endpoint);
  }

  useEffect(() => {
    const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=1`;
    fetchMovies(endpoint);

  }, []);
  
  
  

  return (
    <React.Fragment>
  
        <InfiniteScroll
         dataLength={Movie.length} 
        next={handleClick}
        hasMore={true}
          className="movie-cards"
         >
          {Movie.map((movie, index) => (
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
      </InfiniteScroll>
      <h4 className="infinite-load">Loading...</h4>
           

    </React.Fragment>
  );
};

export default LoadMore;
