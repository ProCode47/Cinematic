import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetail";
import { API_KEY, API_URL } from "./config";
import axios from "axios";
import "./styles/header.css"
import "./styles/main.css";
import "./icons/css/iconmonstr-iconic-font.css";
import { Link } from "react-router-dom";
import Modal from './components/modal'
import Movies from "./components/movies";
import Shows from "./components/show";
import Result from "./components/results";
import Explore from "./components/explore";
import TvDetail from "./components/tvDetail"
import LoadMore from "./components/genreLoader"


const App = () => {
  const [searchItem, setSearch] = useState("");
  const [results, setResult] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [IconDisplay, setIconDisplay] = useState("#3d3dad");

  const handleModal = () => {
    setShowModal(!ShowModal)
  }

  const handleSubmit = () => {
    console.log(searchItem);
    axios
      .get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${searchItem}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.results);
      })
      .catch((err) => {
        console.log("API couldn't be reached");
      });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const ShowResult = () => {
    return <Result search={results} name={searchItem} />;
  };
  const handleSearchField = () => {
    setShowSearch(true)
    setIconDisplay("white")
  }
  const clearSearch = () => {
    setShowSearch(false);
    setIconDisplay("#3d3dad")
  }


  return (
    <Router>
      <React.Fragment >
      <header>
         {" "}  
          <small>
            <Link to="/" id="brand" className="reduce-size">
              {" "}
              Cinematic{" "}
            </Link>
          </small>{" "}
          <span>
            {" "}
            <a style={{color:IconDisplay}}  href="#" onClick={handleSearchField} className="im im-magnifier hide-search show-search"></a>
            <Link to="/" className="hidden-sm ">
              <a>Movies</a>
            </Link>
            <Link to="/tv" className="hidden-sm">
              <a >TV Shows</a>
                    </Link>{" "}
                   
            <Link to="/genre">
              {" "} 
              <button id="main-button" className="hidden-sm">Explore Now</button>{" "}

            </Link>{" "}
            <a onClick={ handleModal}className="im im-menu hidden-lg hidden-md menu-bar"></a>
          </span>{" "}
          <Modal show={ShowModal} handleClose={handleModal}>
          </Modal>
          
        </header>
        {/* SEARCH FIELD  TOOGLE FOR SMALL DEVICES*/}
        {showSearch && <div> <div className="cover" onClick={clearSearch}></div> <span className="search-bar-toggle hidden-md hidden-lg">
          {" "}
          <input
            className="search-toggle"
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleChange}
          />
          <Link to="/results">
            {" "}
            <button id="search-btn-toggle" onClick={handleSubmit}>
              {" "}
              <b className="im im-magnifier"></b>
            </button>{" "}
          </Link>{" "}
        </span> </div>}

        {/* Normal/Default Search Field  */}
        <span className="search-bar hidden-bar">
          {" "}
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleChange}
          />
          <Link to="/results">
            {" "}
            <button id="search-btn" onClick={handleSubmit}>
              {" "}
              <b className="im im-magnifier"></b>
            </button>{" "}
          </Link>{" "}
        </span>
        {/* End of search field ... Routes Components */}
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
