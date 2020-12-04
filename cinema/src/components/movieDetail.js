import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_KEY, API_URL, IMG_URL } from "../config";
import "../styles/details.css"
import queryString from "query-string";
import ReactPlayer from 'react-player';
import axios from "axios";

const MovieDetail = () => {
  const [Movie, setMovie] = useState([]);
  const [Crew, setCrew] = useState([]);
  const [ShowCrew, setShowCrew] = useState(true);
  const [Url, setUrl] = useState();
  const location = useLocation();
  const { id } = queryString.parse(location.search);
  const movieID = id;
  

  const handleCrew = () => {
    setShowCrew(!ShowCrew)
  }

  useEffect(() => {
    
    axios
      .get(`${API_URL}/movie/${movieID}?api_key=${API_KEY}`)
      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);

           
        
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
      axios
      .get(`${API_URL}/movie/${movieID}/credits?api_key=${API_KEY}`)
      .then((res) => {
        setCrew(res.data.cast.splice(0, 12))
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
      
      axios
      .get(`${API_URL}/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`)

    .then((res) => {
      setUrl(res.data.results[0].key);
      console.log(res.data.results[0].key)
    })
    .catch((err) => {
      console.log("Video API couldnt be reached");
    });
  }, []);

  return (
    <React.Fragment>
      <br></br>
      <div className="detail">
        <img src={`${IMG_URL}/w1280${Movie.backdrop_path}`} alt={Movie.title}/>
        
        <div className="bio"><h1><i className="biox">{Movie.title}</i></h1>
          <h2 className="about">Overview</h2>
          <p>{Movie.overview}</p>
          <h2 className="about">Runtime</h2>
          <p><span className="im im-clock"></span> {Movie.runtime} minutes</p>
          <h2 className="about">Released</h2>
          <p><span className="im im-date-o"></span> {Movie.release_date}</p>
          <h2 className="about">Ratings</h2>
          <p><span className="im im-star"></span> {Movie.vote_average} stars </p>
          <button onClick={handleCrew}> Toogle Cast </button>

          {ShowCrew && <div class="movie-card reduce">
            {Crew.map((crew, index) => (
              <div className="movie " key={index}>
                {" "}
                <div className="dp">
                  <img
                    src={`${IMG_URL}/w500${crew.profile_path}`}
                    alt={crew.name}
                  />{" "}
                </div>
                <h4 className="reduce-font">{crew.name}</h4>{" "}
              </div>
            ))}
          </div>}
          
        </div> 
        
         
        
         
        {Url  &&
       <div> <h2 className="text">Watch the Trailer Now!</h2> 
        
        <div className="trailer">
         <ReactPlayer
          url={`https://www.youtube.com/watch?v=${Url}`}
              /> </div> </div>}
        
        {!Url && <h2 class="text"> <span className="im im-wifi"></span> No Trailers for this Movie</h2>}
        
        
      </div>

    </React.Fragment>
  );
};

export default MovieDetail;
