import React from 'react';
import { Link } from "react-router-dom";


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-flex" : "modal display-none";
  
    return (
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">
                <Link to="/">Movies</Link>
                <Link to="tv">TV Shows</Link>
                <Link to="/genre">Explore</Link> 
        </section>
      </div>
    );
};
  
export default Modal;