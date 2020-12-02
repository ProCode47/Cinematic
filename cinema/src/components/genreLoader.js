import React, { useEffect,useState, useRef } from "react";
import { API_KEY, API_URL, IMG_URL } from "../config";
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
     const handleClick = () => {
        const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${Page + 1}`
        fetchMovies(endpoint);
  }

  useEffect(() => {
    const endpoint = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=1`;
    fetchMovies(endpoint);

    
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }
  let callback = (entries, observer) => { 
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
         handleClick()
       }
      
    });
  
  
   console.log(entries, observer)
  };
  
  let observer = new IntersectionObserver(callback, options);
  const target = document.querySelector("#load");
  observer.observe(target)

  }, []);
  
  
  

  return (
    <React.Fragment>
  
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
      <button onClick={handleClick} className="load" id="load"> Load More </button>
      

    </React.Fragment>
  );
};

export default LoadMore;
