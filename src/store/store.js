import { configureStore } from '@reduxjs/toolkit';
import reducer from './MovieReducer';

export default configureStore({
    reducer:{
        movie:reducer,
    }
});