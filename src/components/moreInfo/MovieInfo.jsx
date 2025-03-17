import './MovieInfo.css'

const MovieInfo = ({fullInfo}) => {
  return (
    <div className='movieInfo d-none infoUI-update'>
        <main className="w-100 infoUI-update d-none flex-column justify-content-start align-items-center flex-wrap">
            <div className="movie-info-wrapper d-flex flex-column justify-content-center align-items-center gap-3 py-5 flex-wrap">
                <div className="info-wrapper d-flex gap-3 flex-column">
                    <div className="poster-container">
                        <img src={fullInfo.Poster !== "N/A" ? fullInfo.Poster : "https://via.placeholder.com/400"} alt={fullInfo.Title} className="w-100" />
                    </div>

                    <div className="card downloadWrapper">
                            <div className="card-body">
                                <a href="#download" className="btn w-100 fw-semibold">Download Movie</a>
                            </div>
                        </div>
                </div>

                <div className="row info-wrapper">
                    <div className="col-12 d-flex flex-column justify-content-start align-items-center gap-3">
                        <div className="card">
                            <div className="card-body mt-3">
                                <h5 className="card-title text-uppercase fw-semibold">{fullInfo.Title}</h5>
                                <p className="card-text my-4">{fullInfo.Plot}</p>
                                <div className="subject">ACTORS:</div>
                                <p className="actors">{fullInfo.Actors}</p>
                                <div className="subject">Type:</div>
                                <p className="typed">{fullInfo.Type}</p>
                                <h6 className="subject">GENRE:</h6>
                                <p className="genre">{fullInfo.Genre}</p>
                                <h6 className="subject">Released On:</h6>
                                <p className="released">{fullInfo.Released}</p>
                                <h6 className="subject mt-3">Runtime:</h6>
                                <p className="runtime">{fullInfo.Runtime}</p>
                                <h6 className="subject mt-3">Ratings:</h6>
                                <p className="ratings">{fullInfo.imdbRating}</p>
                                <h6 className="subject mt-3">Language:</h6>
                                <p className="ratings">{fullInfo.Language}</p>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </main>
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