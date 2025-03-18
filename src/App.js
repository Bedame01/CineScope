import {useEffect, useState} from "react";
import "./App.css";
import searchIcon from "./assets/img/search.svg";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import '/node_modules/bootstrap/dist/js/bootstrap.js';
import MovieCard from "./components/MovieCard";
import MovieInfo from "./components/moreInfo/MovieInfo";
import './components/Loading.css';
import Loading from "./components/Loading";

function App() {
  const API_URL = "https://www.omdbapi.com/?apikey=d1c4aa8a";
  const fetchData = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

    document.querySelectorAll('.infoUI-update').forEach((info) => {
      info.classList.add('d-none');
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }
    , 3000);
    fetchData("");
  }, []);

  const [movie, setMovies] = useState([]);
  const [movieMoreInfo, setMovieMoreInfo] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const handleCardClick = (imdbID) => {
    console.log('Clicked IMDb ID:', imdbID);

    // IMDb ID for fetching additional data or redirecting
      const fetchFullData = async (title) => {
      const response2 = await fetch(`${API_URL}&i=${title}`);
      const fullData = await response2.json();
      setMovieMoreInfo(fullData);
      console.log(fullData);
    };
    console.log(fetchFullData(imdbID));
  };

  if (loading) {
    return (
      // <div class="loader">
      //   <div class="loader-inner">
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //     <div class="loader-block"></div>
      //   </div>
      // </div>
      <Loading />
    );    
  }

  return (
    <div className="app d-flex justify-content-center align-items-center flex-column p-3" id="home">
      <div className="homepageWrapper w-100 d-flex justify-content-center align-items-center flex-column">
        <a href="/" className="text-center my-5 text-decoration-none cinescope">
          <h1 className="text-center">CineScope</h1>
        </a>

        <div className="search d-flex justify-content-center align-items-center">
          <input 
            type="text" 
            placeholder="Search for Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {if (e.key === 'Enter') {fetchData(search)}}}
            className="form-control" 
            autoFocus
          />
          <img src={searchIcon} alt="search" onClick={ () => {fetchData(search)}}/>
        </div>

        <div className="displayMovies d-flex justify-content-center align-items-center flex-wrap">
          {
            movie?.length > 0 ? (
              <div className="movies-container">
                {movie.map((movie) => (
                  <MovieCard movie={movie} key={movie.imdbID} imdbID={movie.imdbID} onClick={handleCardClick} searchValue = {setSearch} />
                ))}
              </div>
            ) : (
              <h2 className="text-center my-5 empty">No Movies Found</h2>
            )
          }
        </div>

      </div>

      <MovieInfo fullInfo={movieMoreInfo}  />
    </div>
  );
}

export default App;
