import React from "react";
import Header from './Header';
import MovieList from './MovieList';


const Home = () => {
 
    const [searchText, setSearchText] = React.useState("");

    return (
        <div className="App">
            <Header page="home" setSearchText={ setSearchText }></Header>
            <MovieList searchText={ searchText }></MovieList>
        </div>
    )
}

export default Home;