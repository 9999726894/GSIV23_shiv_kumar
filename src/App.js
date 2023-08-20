import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import MovieInfo from './component/MovieInfo';

function App() {
  return (
    // <Home></Home>
    <BrowserRouter>
    <Routes>
        <Route>
          <Route path="movieinfo" element={<MovieInfo />} />
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
