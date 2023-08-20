import React from "react";
import {  Link } from "react-router-dom";

const Header = ({ page, setSearchText })=> {

    return (
        <div className="header-component">
            {
             page === "details" ? 
                <>
                    <div className="movie-details">Movie Details</div>
                </>
                :
                <input type="search" className="search-text" placeholder="Search by movie title" onChange={ (e) => setSearchText(e.target.value) }/>
            }

            <Link to={'/list'}><div className="home-button"></div></Link> 
        </div>
    )
}

export default Header;