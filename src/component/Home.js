import React from "react";
import Header from './Header';
import MovieList from './MovieList';


const Home = () => {

    return (
        <div className="App">
            <Header page="home"></Header>
            <MovieList></MovieList>
        </div>
    )
}

export default Home;