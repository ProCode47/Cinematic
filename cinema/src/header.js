import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from './components/modal'

const Header = () => {
  const [ShowModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!ShowModal)
  }

    return (
        <React.Fragment>
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
            <a onClick={ handleModal}className="im im-menu hidden-lg hidden-md menu-bar hidden-xs"></a>
          </span>{" "}
          <Modal show={ShowModal} handleClose={handleModal}>
          </Modal>
          
        </header>
        {/* <span className="search-bar hidden-sm">
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
        </span> */}
        </React.Fragment>
      );
}
 
export default Header;