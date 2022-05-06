import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { API_KEY, API_URL, IMG_URL } from "../config";
import "../styles/details.css"
import axios from "axios";




const TvDetail = (props) => {
  const [Crew, setCrew] = useState([]);
  const [ShowCrew, setShowCrew] = useState(true);
  const [Movie, setMovie] = useState([]);
  const tvID = props.match.params.tvID
  const [Url, setUrl] = useState();
  const handleCrew = () => {
    setShowCrew(!ShowCrew)
  }


  useEffect(() => {
    axios
        .get(`${API_URL}/tv/${tvID}?api_key=${API_KEY}&language=en-US`)
        

      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);    
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
      axios
      .get(`${API_URL}/tv/${tvID}/credits?api_key=${API_KEY}`)
      .then((res) => {
        setCrew(res.data.cast.splice(0, 12))
      })
      .catch((err) => {
        console.log("API couldnt be reached");
      });
      axios
      .get(`${API_URL}/tv/${tvID}/videos?api_key=${API_KEY}&language=en-US`)

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
        <img src={`${IMG_URL}/w1280${Movie.backdrop_path}`} alt={Movie.name} />
        
        <div className="bio"><h1><i>{Movie.name}</i></h1>
          <h2 className="about">Overview</h2>
          <p>{Movie.overview}</p>
          <h2 className="about">Last Aired</h2>
          <p><span className="im im-clock"></span> {Movie.last_air_date} </p>
          <h2 className="about">Currently On</h2>
          <p><span className="im im-play"></span> Season {Movie.number_of_seasons}</p>
          <h2 className="about">Episodes</h2>
          <p><span className="im im-date-o"></span> {Movie.number_of_episodes}</p>
          <h2 className="about">Seasons</h2>
          <p><span className="im im-date-o"></span> {Movie.number_of_seasons}</p>
          <h2 className="about">Status</h2>
          <p><span className="im im-star"></span> {Movie.status} </p>
          <button onClick={handleCrew}> Toggle Cast </button>

          
          {ShowCrew && 
           <div class="movie-cards">
           {Crew.map((crew, index) => (
               <div className="movie card-sm" key={index}>
                 <div className="movie-img img-sm">
                   <img
                     src={`${IMG_URL}/w500${crew.profile_path}`}
                     alt={crew.name}
                   />{" "}
                 </div>
                 <div className="movie-info">
                     <h3>{crew.name}</h3>{" "}
                 </div>
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

export default TvDetail;