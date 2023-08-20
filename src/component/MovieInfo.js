import React from "react";
import Header from './Header';
import { useSelector } from 'react-redux';

const MovieInfo = () => {

    const movie = useSelector((state) => state.movie.selectedMovie);

    console.log(movie);

    return (
        <div className="App">
            <Header page="details"></Header>
            <div className="movie-info">
                <div className="image-info">
                    <img src={`https://image.tmdb.org/t/p/original${ movie.poster_path }`} alt=""/>
                </div>
                <div className="movie-text">
                    <div className="text1">{ movie.original_title } <span style={{color:"#b8b6b6"}}>({ movie.vote_average })</span></div>
                    <div className="text2"> <b>Release date :</b> { movie.release_date } </div>
                    <div className="text2"> <b>Original language :</b> { movie.original_language } </div>
                    <div className="text2"> <b>Description :</b> { movie.overview } </div>
                    
                </div>
            </div>
        </div>
    )
}
export default MovieInfo;