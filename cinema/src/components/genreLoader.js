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
          className="movie-card reduce"
         >
        {Movie.map((movie, index) => (
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
      </InfiniteScroll>
      <h4 className="infinite-load">Loading...</h4>
           

    </React.Fragment>
  );
};

export default LoadMore;
