import React from "react";
import {  Link } from "react-router-dom";

const Header = ({page})=> {

    return (
        <div className="header-component">
            {
             page === "details" ? 
                <>
                    <div className="movie-details">Movie Details</div>
                    <Link to={'/home'}><div className="home-button"></div></Link> 
                </>

                :
                <input type="search" className="search-text" placeholder="Search"/>
            }
        </div>
    )
}

export default Header;