import './MovieInfo.css'

const MovieInfo = () => {
  return (
    <div className='movieInfo d-none'>
        {/* <!-- ....Header Section.... --> */}
      <input type="checkbox" id="checkbox" hidden />
      <header className="header px-3 d-flex justify-content-between align-items-center position-fixed w-100">
          {/* <!-- THEME TOGGLE BUTTON --> */}
          <label className="switch">
              <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
              <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
              <input type="checkbox" className="input" />
              <span className="slider"></span>
          </label>

          <h1 className="title text-white pb-0 mb-0">CineScope</h1>

          {/* <!-- ....Toggle Menu Button.... --> */}
          <div className="toggleWrapper d-flex">
              <label for="checkbox" className="toggleBtn position-relative d-flex justify-content-center flex-column main-transition p-5 position-relative justify-content-center">
                  <div className="bars" id="bar1"></div>
                  <div className="bars" id="bar2"></div>
              </label>
          </div>
      </header>

      <div className="homepage position-relative px-2">
      {/* <!-- NAVIGATION --> */}
      <nav className="navigation position-fixed d-flex justify-content-end align-items-right w-100 px-5">
          <ul className="list-group">
              <li><a href="#home" className="text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-decoration-none">About</a></li>
          </ul>
      </nav>

      {/* <!-- ASIDE SECTION --> */}
      <aside className="position-fixed aside d-none flex-column justify-content-start align-items-center gap-3 pt-4">
          <div className="aside-search d-flex justify-content-center align-items-center">
              <input type="text" placeholder="Search for Movies"/>
              <img src='./src/assets/img/search.svg' alt="search" className="mx-1"/>
          </div>
          <div className="category-wrapper d-flex flex-column justify-content-start align-items-start gap-3 w-100">
              <h6 className="text-white results fw-bold px-3">Results:</h6>
              <ol className="list-group list-group-numbered w-100">
                  <li className="list-group-item">Action</li>
                  <li className="list-group-item">Comedy</li>
                  <li className="list-group-item">Drama</li>
                  <li className="list-group-item">Horror</li>
                  <li className="list-group-item">Romance</li>
                  <li className="list-group-item">Thriller</li>
              </ol>
          </div>
      </aside>

      {/* <!-- MAIN SECTION --> */}
        <main className="w-100 d-flex flex-column justify-content-start align-items-center flex-wrap">
            <div className="movie-info-wrapper d-flex flex-column justify-content-center align-items-center gap-3 py-5 flex-wrap">
                <div className="poster-container">
                    {/* <img src={movie.poster} alt="Movie Poster" className="w-100"> */}
                </div>
                <div className="row info-wrapper">
                    <div className="col-12 d-flex flex-column justify-content-start align-items-center gap-3">
                        <div className="card">
                            <div className="card-body mt-3">
                                <h2 className="card-title text-uppercase">Italian Spiderman</h2>
                                <p className="card-text my-4">When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.</p>
                                <div className="subject">ACTORS:</div>
                                <p className="actors">David Ashby, Chris Asimos, Anna Cashman</p>
                                <div className="subject">Type:</div>
                                <p className="typed">Series</p>
                                <h6 className="subject">GENRE:</h6>
                                <p className="genre">Short, Action, Comedy</p>
                                <h6 className="subject">Released: <span className="text-black">08 Nov 2007</span></h6>
                                <h6 className="subject mt-3">Runtime: <span className="text-black"> 40 min</span></h6>
                                <h6 className="subject mt-3">Ratings:</h6>
                                <p className="ratings">7.8/10</p>
                                <h6 className="subject mt-3">Language:</h6>
                                <p className="ratings">English, Italian</p>
                            
                            </div>
                        </div>
                        <div className="card downloadWrapper">
                            <div className="card-body">
                                <a href="#download" className="btn w-100 fw-semibold">Download Movie</a>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </main>
      </div>
    </div>
  )
}

export default MovieInfo

// {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "Rated": "N/A",
//     "Released": "08 Nov 2007",
//     "Runtime": "40 min",
//     "Genre": "Short, Action, Comedy",
//     "Director": "Dario Russo",
//     "Writer": "Dario Russo, David Ashby, Tait Wilson",
//     "Actors": "David Ashby, Chris Asimos, Anna Cashman",
//     "Plot": "When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.",
//     "Language": "English, Italian",
//     "Country": "Australia",
//     "Awards": "N/A",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "7.8/10"
//         }
//     ],
//     "Metascore": "N/A",
//     "imdbRating": "7.8",
//     "imdbVotes": "1,280",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "DVD": "N/A",
//     "BoxOffice": "N/A",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }