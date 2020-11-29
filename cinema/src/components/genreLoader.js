import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMG_URL } from "../config";
import InfiniteScroll from 'react-infinite-scroll-component';
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
          console.log(movieData)
          console.log(res.data.page)
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
    };

  useEffect(() => {
    const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=1`;
    fetchMovies(endpoint);
  }, []);

 
    
    const handleClick = () => {
        const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${Page + 1}`
        fetchMovies(endpoint);
    }

  return (
    <React.Fragment>
        <InfiniteScroll
        dataLength={Movie.length} //This is important field to render the next data
        next={fetchMovies}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="movie-card"
      >
       <div class="movie-card">
        {Movie.map((movie, index) => (
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
      <button onClick={handleClick} className="load"> Load More </button>
      
    </InfiniteScroll>

    </React.Fragment>
  );
};

export default LoadMore;
