import React from "react";
import {useDispatch } from 'react-redux';
import { addMovie } from '../store/MovieReducer';
import {  Link } from "react-router-dom";

const MovieCard = ({item})=>{

    const dispatch = useDispatch();

    const showMovieDetails = ()=>{
        dispatch(addMovie(item));
    }
    return(
        <Link to="/details">
            <div className="movie-card" onClick={showMovieDetails}>
                <div><img src={`https://image.tmdb.org/t/p/original${ item.poster_path }`} alt=""/></div>
                <div className="movie-info">
                    <div className="movie-title" title={ item.title }><b>Movie Title</b><br/>{ item.title }</div>
                    <div className="movie-rating">(Rating) <br/>{ item.vote_average }</div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;