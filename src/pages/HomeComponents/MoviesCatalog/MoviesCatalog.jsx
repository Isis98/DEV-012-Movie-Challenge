import "./Catalog.css";

const getYearFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

const MoviesCatalog = ({ movies, moviesPerPage, currentPage }) => {
  const lastIndex = currentPage * moviesPerPage;
  const firstIndex = lastIndex - moviesPerPage;

  return (
    <section className="movies">
      <ul>
        {
          movies.map((movie, index) => (
            <li key={index} data-id={movie.genre_ids} >
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="release-date-container">
                  <p>{getYearFromDate(movie.release_date)}</p>
                </div>
              </figure>
              <h3>{movie.title}</h3>
            </li>
          ))
         
        }
      </ul>
    </section>
  );
};

export default MoviesCatalog;
