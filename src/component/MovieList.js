import React from "react";
import MovieCard from "./MovieCard";
import { getApiData } from '../ApiService';
import { getFilterMovie } from '../Utils';

const MovieList = ({ searchText })=>{

    const [movieData, setMovieData] = React.useState([]);
    const [filterMovie, setFilterMovie] = React.useState([]);

    React.useEffect(()=>{
        (async ()=>{
            let movieData = await getApiData();
            setMovieData(movieData.results);
            setFilterMovie(movieData.results);
            console.log(movieData.results);
        })()
    },[]);


    React.useEffect(()=>{

        setFilterMovie(getFilterMovie( movieData, searchText ));

    },[searchText]);

    return (
        <div className="list-container">
            {
                filterMovie.length > 0 ? filterMovie.map((item, index)=>{

                    return (
                        <MovieCard item={ item } key={index}></MovieCard>
                    )
                }) 
                : 
                <>
                    {
                        searchText.length > 0 ? <h3>This movie title not available...</h3> : <div>Loading....</div> 
                    }
                </>
            }

        </div>
    )
}

export default MovieList;