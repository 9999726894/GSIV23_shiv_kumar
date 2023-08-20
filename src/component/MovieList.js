import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ()=>{


    const [movieData, setMovieData] = React.useState([]);

    const getData = async ()=>{
        let myObject = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ad85cef9c89f3019f7fb50e4663b645d");
        const jsonData = await myObject.json();
        setMovieData(jsonData.results);
       console.log(jsonData.results)
    }
    React.useEffect(()=>{
        getData();

    },[]);

    return (
        <div className="list-container">
            {
                movieData.length > 0 ? movieData.map((item, index)=>{

                    return (
                        <MovieCard item={ item } key={index}></MovieCard>
                    )
                }) : <div>Loading....</div>
            }

        </div>
    )
}

export default MovieList;