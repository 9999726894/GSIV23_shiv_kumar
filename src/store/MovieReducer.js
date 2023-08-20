import {createSlice} from "@reduxjs/toolkit";

export const MovieReducer = createSlice({
    name:"moviestore",
    initialState:{
        selectedMovie:null,
    },
    reducers:{
        addMovie:(state, movie)=>{
            console.log(movie);
            state.selectedMovie = movie.payload;
        },
        remove: (state)=>{
            state.selectedMovie = null;
        }
    }
});

export const { addMovie, remove } = MovieReducer.actions;

export default MovieReducer.reducer;
