// import img1 from '../assets/img/img1.jpg';

const MovieCard = ({ movie, imdbID, onClick, searchValue }) => {

  const handleClick = () => {
    onClick(imdbID);
    document.querySelectorAll('.movie').forEach((movie) => {
      movie.classList.add('d-none');
    });
    searchValue(movie.Title);

    document.querySelectorAll('.infoUI-update').forEach((info) => {
      info.classList.remove('d-none');
    });
  };

  return (
    <div className="movie" key={movie.imdbID} onClick={handleClick}>
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>

    </div>
  );
}

export default MovieCard;