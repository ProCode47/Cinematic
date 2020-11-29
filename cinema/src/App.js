import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetail";
import { API_KEY, API_URL } from "./config";
import axios from "axios";
import "./styles/header.css"
import "./styles/main.css";
import "./icons/css/iconmonstr-iconic-font.css";
import Movies from "./components/movies";
import Shows from "./components/show";
import Result from "./components/results";
import Explore from "./components/explore";
import TvDetail from "./components/tvDetail"
import LoadMore from "./components/genreLoader"
import Header from './header'

// import { Link } from "react-router-dom";

const App = () => {
  const [searchItem, setSearch] = useState("");
  const [results, setResult] = useState([]);

  // const handleSubmit = () => {
  //   console.log(searchItem);
  //   axios
  //     .get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${searchItem}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setResult(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log("API couldn't be reached");
  //     });
  // };
  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const ShowResult = () => {
    return <Result search={results} name={searchItem} />;
  };
  return (
    <Router>
      <React.Fragment>
       <Header/>
        <Route path="/results" component={ShowResult}></Route>
        <Route path="/" exact component={Movies}></Route>
        <Route path="/tv" exact component={Shows}></Route>
        <Route path="/genre" exact component={Explore}></Route>
        <Route path="/movie/:movieID" component={MovieDetail}></Route>
        <Route path="/tv/:tvID" component={TvDetail}></Route>
        <Route path="/discover/:genre" component={LoadMore}></Route>


      </React.Fragment>
    </Router>
  );
};

export default App;
